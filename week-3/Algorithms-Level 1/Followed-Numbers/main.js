const findFollowedNumbers = function (arr) {
  const followedNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    let left = i - 1;
    let right = i + 1;
    let exist = false;
    for (let num of arr) {
      if (left == num || right == num) {
        exist = true;
      }
    }
    if (exist) {
      followedNumbers.push(arr[i]);
    }
  }
  return followedNumbers;
};

findFollowedNumbers([4, 1, 3]);
