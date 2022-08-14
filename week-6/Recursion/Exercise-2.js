const reverseString = string => {
    if(string.length === 1) {
        return string;
    }
    return string[string.length-1] + reverseString(string.slice(0, string.length-1));
}

reverseString("ali")