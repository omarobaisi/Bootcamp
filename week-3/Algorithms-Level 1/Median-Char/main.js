const findMedian = function (str) {
  const sortedString = str.split("").sort().join("");
  return sortedString[Math.round(str.length / 2) - 1];
};

findMedian("question");
