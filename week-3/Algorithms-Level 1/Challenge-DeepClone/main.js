function deepClone(obj) {
  // base case
  if (typeof obj !== "object") {
    return obj;
  }
  // Array or object
  let clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    const value = obj[key];
    clone[key] = deepClone(value);
  }
  return clone;
}

let x = { a: "b", a2: ["first", "second"] };
let y = { b: x, b3: ["firtsY", x] };
let z = deepClone(y);
console.log(z);
x.a = "hhh";
x.a2[0] = "Third";
x.a2[1] = "six";
console.log(z);
