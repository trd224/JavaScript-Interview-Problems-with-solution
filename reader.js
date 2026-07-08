(() => {
'use strict';

/*====================================================
    Prevent Duplicate Loading
====================================================*/

if (window.__TEXT_READER__) return;
window.__TEXT_READER__ = true;

/*====================================================
    Configuration
====================================================*/

const config = {
    rate: 1,
    pitch: 1,
    volume: 1,
    autoScroll: true,
    highlight: true
};

/*====================================================
    Application State
====================================================*/

const state = {
    items: [],
    currentIndex: 0,
    voices: [],
    selectedVoice: null,
    utterance: null,
    isPlaying: false,
    isPaused: false
};

/*====================================================
    Speech API
====================================================*/

const speech = window.speechSynthesis;

/*====================================================
    Toolbar Elements
====================================================*/

let toolbar;

let playBtn;
let pauseBtn;
let resumeBtn;
let stopBtn;

let prevBtn;
let nextBtn;

let voiceSelect;
let speedSlider;

let speedValue;
let progressLabel;

/*====================================================
    Start
====================================================*/

document.addEventListener("DOMContentLoaded", init);

/*====================================================
    Inject Styles
====================================================*/

function injectStyles() {

    if (document.getElementById("text-reader-style")) return;

    const style = document.createElement("style");

    style.id = "text-reader-style";

    style.textContent = `

.reader-toolbar{
position:sticky;
top:10px;
z-index:99999;
display:flex;
flex-wrap:wrap;
align-items:center;
gap:10px;
padding:12px;
margin-bottom:20px;
background:#0f172a;
border:1px solid #1e293b;
border-radius:10px;
box-shadow:0 8px 20px rgba(0,0,0,.35);
}

.reader-toolbar button{
background:#2563eb;
color:#fff;
border:none;
padding:8px 16px;
border-radius:6px;
cursor:pointer;
font-size:14px;
transition:.25s;
}

.reader-toolbar button:hover{
background:#1d4ed8;
}

.reader-toolbar button:disabled{
background:#334155;
cursor:not-allowed;
opacity:.6;
}

.reader-toolbar select{
padding:8px;
background:#020617;
color:#fff;
border:1px solid #334155;
border-radius:6px;
}

.reader-toolbar input[type="range"]{
width:120px;
cursor:pointer;
}

.reader-toolbar label{
display:flex;
align-items:center;
gap:6px;
font-size:14px;
color:#fff;
}

.reader-progress{
margin-left:auto;
font-weight:bold;
color:#38bdf8;
}

.reader-highlight{
background:#1e293b !important;
border-left:5px solid #22c55e !important;
padding-left:10px !important;
border-radius:6px;
box-shadow:0 0 0 1px rgba(34,197,94,.35), 0 6px 18px rgba(34,197,94,.25), 0 0 24px rgba(34,197,94,.15);
transition:box-shadow .25s, background .25s, border-color .25s;
}

.reader-clickable{
transition:background .2s;
border-radius:4px;
}

.reader-clickable:hover{
background:rgba(56,189,248,.08);
}

`;

    document.head.appendChild(style);

}
/*====================================================
    Create Toolbar
====================================================*/

function createToolbar() {

    const container =
        document.querySelector(".container") ||
        document.body;

    toolbar = document.createElement("div");

    toolbar.className = "reader-toolbar";

    toolbar.innerHTML = `
        <button id="readerPlay">▶ Play</button>

        <button id="readerPause">⏸ Pause</button>

        <button id="readerResume">▶ Resume</button>

        <button id="readerStop">⏹ Stop</button>

        <button id="readerPrev">⏮ Prev</button>

        <button id="readerNext">⏭ Next</button>

        <label>
            Voice
            <select id="readerVoice"></select>
        </label>

        <label>
            Speed
            <input
                id="readerSpeed"
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value="1">
        </label>

        <span id="readerSpeedValue">
            1x
        </span>

        <div class="reader-progress">
            <span id="readerProgress">
                0 / 0
            </span>
        </div>
    `;

    container.prepend(toolbar);

}

/*====================================================
    Cache Controls
====================================================*/

function cacheControls() {

    playBtn = document.getElementById("readerPlay");

    pauseBtn = document.getElementById("readerPause");

    resumeBtn = document.getElementById("readerResume");

    stopBtn = document.getElementById("readerStop");

    prevBtn = document.getElementById("readerPrev");

    nextBtn = document.getElementById("readerNext");

    voiceSelect = document.getElementById("readerVoice");

    speedSlider = document.getElementById("readerSpeed");

    speedValue = document.getElementById("readerSpeedValue");

    progressLabel = document.getElementById("readerProgress");

}
/*====================================================
    Load Voices
====================================================*/

function loadVoices() {

    state.voices = speech.getVoices();

    voiceSelect.innerHTML = "";

    state.voices.forEach((voice, index) => {

        const option = document.createElement("option");

        option.value = index;

        option.textContent = `${voice.name} (${voice.lang})`;

        voiceSelect.appendChild(option);

    });

    if (state.voices.length > 0) {
        state.selectedVoice = state.voices[0];
    }

}

if (speech.onvoiceschanged !== undefined) {
    speech.onvoiceschanged = loadVoices;
}

/*====================================================
    Toolbar Events
====================================================*/

function bindToolbarEvents() {

    speedSlider.addEventListener("input", () => {

        config.rate = Number(speedSlider.value);

        speedValue.textContent = config.rate + "x";

        // Live-apply the new rate if something is currently speaking
        if (state.isPlaying && !state.isPaused) {
            speech.cancel();
            speakCurrent();
        }

    });

    voiceSelect.addEventListener("change", () => {

        state.selectedVoice =
            state.voices[voiceSelect.selectedIndex];

    });

}
/*====================================================
    Collect Readable Content
====================================================*/

function collectContent() {

    state.items = [];

    const elements = document.querySelectorAll(`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        li,
        td,
        th,
        .highlight,
        .success,
        .warning,
        .flow,
        pre
    `);

    elements.forEach(element => {

        // Skip anything inside the toolbar itself
        if (toolbar && toolbar.contains(element)) return;

        const text = element.innerText
            .replace(/\s+/g, " ")
            .trim();

        if (!text) return;

        const isCodeBlock =
            element.tagName.toLowerCase() === "pre";

        if (isCodeBlock) {

            // Code often has no periods/punctuation, so sentence
            // splitting doesn't make sense here. Instead, announce
            // clear start/end markers around the raw code text.
            state.items.push({
                element,
                text: "Code block start"
            });

            state.items.push({
                element,
                text: text
            });

            state.items.push({
                element,
                text: "Code block end"
            });

            return;

        }

        const sentences =
            text.match(/[^.!?]+[.!?]+|[^.!?]+$/g);

        if (!sentences) return;

        sentences.forEach(sentence => {

            state.items.push({
                element,
                text: sentence.trim()
            });

        });

    });

    progressLabel.textContent =
        `0 / ${state.items.length}`;

}

/*====================================================
    Highlight
====================================================*/

function clearHighlight() {

    document
        .querySelectorAll(".reader-highlight")
        .forEach(element => {

            element.classList.remove(
                "reader-highlight"
            );

        });

}

function highlightCurrent() {

    if (!config.highlight) return;

    clearHighlight();

    const item =
        state.items[state.currentIndex];

    if (!item) return;

    item.element.classList.add(
        "reader-highlight"
    );

    if (config.autoScroll) {

        item.element.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

}
/*====================================================
    Speak Current Item
====================================================*/

function speakCurrent() {

    if (state.currentIndex < 0) {
        state.currentIndex = 0;
    }

    if (state.currentIndex >= state.items.length) {

        state.isPlaying = false;

        state.isPaused = false;

        clearHighlight();

        return;

    }

    speech.cancel();

    highlightCurrent();

    const item =
        state.items[state.currentIndex];

    state.utterance =
        new SpeechSynthesisUtterance(item.text);

    state.utterance.rate =
        config.rate;

    state.utterance.pitch =
        config.pitch;

    state.utterance.volume =
        config.volume;

    if (state.selectedVoice) {

        state.utterance.voice =
            state.selectedVoice;

    }

    progressLabel.textContent =
        `${state.currentIndex + 1} / ${state.items.length}`;

    state.utterance.onend = () => {

        if (!state.isPlaying) return;

        if (state.isPaused) return;

        state.currentIndex++;

        speakCurrent();

    };

    speech.speak(state.utterance);

}

/*====================================================
    Playback Controls
====================================================*/

function playFromStart() {

    if (state.items.length === 0) return;

    state.currentIndex = 0;

    state.isPlaying = true;

    state.isPaused = false;

    speakCurrent();

}

function pauseReading() {

    if (!state.isPlaying || state.isPaused) return;

    // Set isPaused BEFORE cancelling so the onend handler
    // (fired by cancel() on most browsers) sees isPaused = true
    // and does NOT advance to the next item.
    state.isPaused = true;

    speech.cancel();

}

function resumeReading() {

    if (!state.isPlaying || !state.isPaused) return;

    state.isPaused = false;

    // Native speechSynthesis.resume() is unreliable after cancel()
    // in Chromium browsers (utterance queue can get stuck), so we
    // simply re-speak the current sentence from the start instead.
    speakCurrent();

}

function stopReading() {

    state.isPlaying = false;

    state.isPaused = false;

    state.currentIndex = 0;

    speech.cancel();

    clearHighlight();

    progressLabel.textContent =
        `0 / ${state.items.length}`;

}

function goToPrev() {

    if (state.items.length === 0) return;

    const target = state.currentIndex > 0 ? state.currentIndex - 1 : 0;

    jumpToIndex(target);

}

function goToNext() {

    if (state.items.length === 0) return;

    jumpToIndex(state.currentIndex + 1);

}

/*====================================================
    Bind Toolbar Button Actions
====================================================*/

function bindButtonActions() {

    playBtn.addEventListener("click", playFromStart);

    pauseBtn.addEventListener("click", pauseReading);

    resumeBtn.addEventListener("click", resumeReading);

    stopBtn.addEventListener("click", stopReading);

    prevBtn.addEventListener("click", goToPrev);

    nextBtn.addEventListener("click", goToNext);

}

/*====================================================
    Click Any Element To Read
====================================================*/

function enableClickToRead() {

    const seenElements = new Set();

    state.items.forEach((item, index) => {

        // Only attach one click listener per element, even if that
        // element contains multiple sentences. Without this, a
        // paragraph with 3 sentences would get 3 competing click
        // listeners firing back-to-back on click.
        if (seenElements.has(item.element)) return;

        seenElements.add(item.element);

        item.element.classList.add("reader-clickable");

        item.element.style.cursor = "pointer";

        item.element.addEventListener("click", () => {

            const selection = window.getSelection();

            // If the user has highlighted text (e.g. to copy it),
            // don't hijack the click to jump playback.
            if (selection && selection.toString().length > 0) return;

            jumpToIndex(index);

        });

    });

}

function jumpToIndex(index) {

    if (index < 0) return;

    // Note: an index >= state.items.length is intentionally allowed
    // through — speakCurrent() detects that and cleanly stops playback
    // (used when Next is pressed on the very last item).
    state.currentIndex = index;

    state.isPlaying = true;

    state.isPaused = false;

    speakCurrent();

}

/*====================================================
    Keyboard Shortcuts
====================================================*/

function bindKeyboardShortcuts() {

    document.addEventListener("keydown", (e) => {

        // Ignore shortcuts while typing in inputs/selects
        const tag = (e.target.tagName || "").toLowerCase();
        if (tag === "input" || tag === "select" || tag === "textarea") return;

        // Space = Toggle Play / Pause / Resume
        if (e.code === "Space") {

            e.preventDefault();

            if (!state.isPlaying) {
                playFromStart();
            } else if (state.isPaused) {
                resumeReading();
            } else {
                pauseReading();
            }

        }

        // Escape = Stop
        if (e.key === "Escape") {

            stopReading();

        }

        // Right Arrow = Next
        if (e.key === "ArrowRight") {

            goToNext();

        }

        // Left Arrow = Prev
        if (e.key === "ArrowLeft") {

            goToPrev();

        }

    });

}

/*====================================================
    Initialize Reader
====================================================*/

function init() {

    injectStyles();

    createToolbar();

    cacheControls();

    loadVoices();

    bindToolbarEvents();

    bindButtonActions();

    collectContent();

    enableClickToRead();

    bindKeyboardShortcuts();

}

/*====================================================
    Close Module
====================================================*/

})();
