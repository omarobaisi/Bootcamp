const arr = [1, "w", "e", 2, "r", 7, 8];

const reverseNumbers = function (arr) {
  let numbers = [];
  let counter = 0;
  arr.forEach((element) => {
    if (!isNaN(element)) {
      numbers.push(element);
    }
  });
  numbers = numbers.reverse();
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      arr[i] = numbers[counter];
      counter++;
    }
  }
  return arr;
};

reverseNumbers(arr);
