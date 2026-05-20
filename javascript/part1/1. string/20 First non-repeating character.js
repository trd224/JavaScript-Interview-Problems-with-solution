function firstNonRepeating(str) {

    let freq = {};

    // Count frequency
    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // Find first non-repeating
    for (let ch of str) {
        if (freq[ch] === 1) {
            return ch;
        }
    }

    return null;
}

console.log(firstNonRepeating("leetcode")); // l
console.log(firstNonRepeating("loveleetcode")); // v
console.log(firstNonRepeating("aabb")); // null