const arr = [1, 2, 3];

const duplicate = function (arr) {
  let newArr = [];
  arr.forEach((element) => newArr.push(element));
  arr.forEach((element) => newArr.push(element));
  return newArr;
};

duplicate(arr);
