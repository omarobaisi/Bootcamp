const arr1 = [5, 9, 15];
const arr2 = [3, 5, 7];
const arr3 = [17, 20, 5];

const findCommon = function (arr1, arr2, arr3) {
  let lookup1 = new Set(arr2);
  let lookup2 = new Set(arr3);
  let Common = [];

  for (let num of arr1) {
    if (lookup1.has(num) && lookup2.has(num)) {
      Common.push(num);
    }
  }
  return Common;
};

findCommon(arr1, arr2, arr3);
