function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn.apply(this, args); 
        }, delay);
    };
}

function search(query) {
    console.log("Searching:", query);
}

const debouncedSearch = debounce(search, 500);

// Simulate typing
debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel");
debouncedSearch("hell");
debouncedSearch("hello");


//////////////////////////


function debounceFn(fn, delay) {
    let timer;

    return function (args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(args); 
        }, delay);
    };
}

function searchFn(query) {
    console.log("Searching:", query);
}

const debouncedSearchFn = debounceFn(searchFn, 500);

// Simulate typing
debouncedSearchFn("h");
debouncedSearchFn("he");
debouncedSearchFn("hel");
debouncedSearchFn("hell");
debouncedSearchFn("hello");

