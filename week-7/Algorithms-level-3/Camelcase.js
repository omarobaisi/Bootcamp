String.prototype.camelCase = function() {
    const str = this.split(' ')
    let newString = str[0]
	for(let i=1; i<str.length; i++) {
        newString += str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return newString
};

"hello case".camelCase()