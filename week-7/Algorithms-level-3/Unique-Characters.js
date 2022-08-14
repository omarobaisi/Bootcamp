const hasUnique = string => {
    string = string.toLowerCase();
    const checkedCharacters = new Set();
    let unique = true;
    [...string].forEach(char => {
        if(!checkedCharacters.has(char)) {
            checkedCharacters.add(char);
        } else {
            unique = false
        }
    })
    return unique
}

hasUnique("h gj");