const arr1 = [3, 7, 11, 19, 27, 28];
const arr2 = [2, 5, 7, 8, 9, 11, 14];
const arr3 = [1, 3, 4, 5, 6, 8, 11, 16];

const findCommon = function (arr1, arr2, arr3) {
  const Biggest = Math.max(arr2[arr2.length - 1], arr3[arr3.length - 1]);
  const Smallest = Math.min(arr2[0], arr3[0]);
  let lookup1 = new Set(arr2);
  let lookup2 = new Set(arr3);
  let Common = [];

  for (let num of arr1) {
    if (num > Biggest) {
      break;
    } else if (num < Smallest) {
      continue;
    } else if (lookup1.has(num) && lookup2.has(num)) {
      Common.push(num);
    }
  }
  return Common;
};

findCommon(arr1, arr2, arr3);
