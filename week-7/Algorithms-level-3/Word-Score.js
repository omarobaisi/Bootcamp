const highestScore = (string) => {
    string = string.split(" ")
    let maxWord = null;
    let maxNumber = 0
    const charCode = 96
    for(let word of string) {
        let max = 0
        for(let char in word) {
            max += word.charCodeAt(char)-charCode;
        }
        if(max > maxNumber) {
            maxNumber = max
            maxWord = word
        }
    }
    return maxWord
}

const arr = "if you are a winner"
highestScore(arr);