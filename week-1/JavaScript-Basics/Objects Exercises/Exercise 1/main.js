let p1 = {
    name: 'Jill',
    age: 26,
    city: 'Ramallah'
}

let p2 = {
    name: 'Robert',
    age: 24,
    city: 'Nablus'
}

if(p1.age === p2.age) console.log('Both at the same age')

if(p1.city === p2.city) {
    console.log(`${p1.name} wanted to date ${p2.name}`)
} else {
    console.log(`${p1.name} wanted to date ${p2.name}, but couldn't`)
}