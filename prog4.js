// Write a function that takes an array of numbers and returns a new array where each element is doubled using the map method


function numbers(){
    
let num = [1,3,8,5]
console.log("original array:", num);
   let x = num.map(el=> el*2)
   return x
   
}
let results = numbers()
console.log(results);

