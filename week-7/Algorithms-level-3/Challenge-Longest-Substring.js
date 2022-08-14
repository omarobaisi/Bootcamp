const longestSubstring = s => {
    let checkRepeat = new Set();
    let l = 0;
    let r = 0;
    let longestLength = 0;
    let longestSubstring = null;
    let substring = "";
    let substringLength = 0
    while(r < s.length) {
        if(!checkRepeat.has(s[l])) {
            checkRepeat.add(s[l])
            substring = substring + s[l]
            l++;
            substringLength++;
        } else {
            if(substringLength > longestLength) {
                longestSubstring = substring;
                longestLength = substringLength
            }
            r++;
            l = r;
            checkRepeat.clear();
            substring = ""
            substringLength = 0;
        }
    }
    return longestSubstring
}


longestSubstring("communication")