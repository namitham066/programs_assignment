// 28. Write a function to add zeros after every 3 values in an array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(arr[i]); 
  
  if ((i + 1) % 3 === 0) {
    result.push(0);
  }
}
console.log(result);