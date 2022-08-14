const decode = string => {
    if(string === "") {
        return 0
    }
    const count = {};
    let repeatCount = "";
    [...string].forEach(char => {
        if(count[char]) {
            count[char]++;
        } else {
            count[char] = 1
        }
    })
    for(let key in count) {
        repeatCount += key+count[key]
    }
    return repeatCount
}

decode("1121")