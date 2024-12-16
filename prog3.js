// Given an array of objects representing people with their names and ages, use filter to get only the people who are 18 or older, and then use map to create an array of their names

//  const people = [{ name: "Alice", age: 25 },
//  { name: "Bob", age: 17 },{ name: "Charlie", age: 30 },{ name: "David", age: 16 }, { name: "Eve", age: 20 }  ];

const people = [{ name: "Alice", age: 25 },
{ name: "Bob", age: 17 },{ name: "Charlie", age: 30 },{ name: "David", age: 16 }, { name: "Eve", age: 20 }  ];

let Filter = people.filter(el => (el.age >= 18))
let map = Filter.map(p => (p.name))

console.log(map)


