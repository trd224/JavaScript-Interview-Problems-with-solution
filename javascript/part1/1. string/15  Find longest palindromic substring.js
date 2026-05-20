function longestPalindrome(s) {

    let res = "";
    let resLen = 0;

    function expand(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {

            if ((r - l + 1) > resLen) {
                res = s.slice(l, r + 1);
                resLen = r - l + 1;
            }

            l--;
            r++;
        }
    }

    for (let i = 0; i < s.length; i++) {

        // odd length palindrome
        expand(i, i);

        // even length palindrome
        expand(i, i + 1);
    }

    return res;
}

console.log(longestPalindrome("babad"));