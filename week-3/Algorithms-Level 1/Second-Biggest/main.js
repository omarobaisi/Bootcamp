const findBiggestIndex = function (arr) {
  let max = Number.MIN_VALUE;
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return arr.indexOf(max);
};

const findSecondBiggest = function (arr) {
  const biggestValueIndex = findBiggestIndex(arr);
  arr.splice(biggestValueIndex, 1);
  const secondBiggest = arr[findBiggestIndex(arr)];
  return secondBiggest;
};

findSecondBiggest([12, 3, 4, 7, 23]);
