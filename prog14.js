// 14. Write a program to find the count of the maximum prefix and suffix that are the same in a given string.
function maxPrefixSuffix(str) {
  let n = str.length;
  let count = 0;

  for (let i = 1; i <= n; i++) {
   
    if (str.slice(0, i) === str.slice(n - i)) {
      count = i;  
    }
  }

  return count;  // 
}


let input = "ababa";
let result = maxPrefixSuffix(input);
console.log(result);  


  