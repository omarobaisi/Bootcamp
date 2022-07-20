const arr1 = [5, 9, 15];
const arr2 = [3, 5, 7];

const findCommon = function (arr1, arr2) {
  let lookup = {};
  let Common = [];
  for (let num of arr1) {
    lookup[num] = num;
  }

  for (let num of arr2) {
    if (lookup.hasOwnProperty(num)) {
      Common.push(num);
    }
  }
  return Common;
};

findCommon(arr1, arr2);
