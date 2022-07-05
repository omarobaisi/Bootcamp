const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

const keys = Object.keys(dictionary)
for(let key of keys) {
  let elements = dictionary[key]
  console.log(`Words that begin with ${key}:`)
  for(let element of elements) {
    console.log(`     ${element}`)
  }
}