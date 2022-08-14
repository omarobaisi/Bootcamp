const findDuplicates = (arr) => {
  const set = new Set();
  let result = [];
  arr.forEach((element) => {
    if (set.has(element)) {
      result.push(element);
    } else {
      set.add(element);
    }
  });
  return result;
};
