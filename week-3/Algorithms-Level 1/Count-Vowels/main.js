const countVowels = function (str) {
  let count = 0;
  const lookup = new Set();
  vowels.forEach((vowel) => lookup.add(vowel));
  for (var i = 0; i < str.length; i++) {
    if (lookup.has(str.charAt(i))) {
      count++;
    }
  }
  return count;
};

countVowels("aabcde");
