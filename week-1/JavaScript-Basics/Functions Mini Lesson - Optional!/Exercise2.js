function count(sentence) {
  var list = sentence.split(" ");
  var words = {};
  for (var i = 0; i < list.length; i++) {
    if (!words.hasOwnProperty(list[i])) {
      words[list[i]] = 0;
    }
    ++words[list[i]];
  }
  return words;
}
var display = count("ask a question get a question");

console.log(display);
