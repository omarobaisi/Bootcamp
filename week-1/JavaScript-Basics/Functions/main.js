// Exercise 1
function isEven(num) {
  if(num%2 == 0) {
    return true
  }
  return false
}

// Exercise 2
function loop(array) {
  for(let num of array) {
    console.log(`${num} is even? ${isEven(num)}`)
  }
}

let arr = [5,9,3,2]
loop(arr)

// Exercise 3
function find(array, int) {
  for(let num of array) {
    if(num === int) return true
  }
  return false
}

let arr = [5,9,3,2]
find(arr, 4)

// Exercise 4
let calculator = {
  add: function(a,b) {
    return a+b
  },
  subtract: function(a,b) {
    return a-b
  }
}
calculator.add(5,3)
calculator.subtract(5,3)