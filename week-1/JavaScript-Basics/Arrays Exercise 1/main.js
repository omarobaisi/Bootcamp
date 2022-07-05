const numbers = [1,2,3,4,5,6,7,8,9,10]

// delete the second and third elements
// [1,4,5,6,7,8,9,10]
numbers.splice(1, 2)

// change the fourth element to 1
// [1,4,5,1,7,8,9,10]
numbers[3] = 1

// delete the last 4 elements
// [1,4,5,1]
numbers.splice(numbers.length-4, 4)

// add another element 0 to the beginning of the array
// [0,1,4,5,1]
numbers.unshift(0)

console.log(numbers)