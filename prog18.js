// 18.   Write a function for input: ["1a1", "2aa3a", 'aabc31", "101", "1001", "a1", "3211", "11c"] and output [101, 1001, 3211]
function elements(str) {
    
    return /^[0-9]+$/.test(str) && str === str.split('').reverse().join('');
  }
  
  function NumericPalindrome(arr) {
    return arr.filter(elements);
  }
  
  
  let input = ["1a1", "2aa3a", "aabc31", "101", "1001", "a1", "3211", "11c"];
  let result =NumericPalindrome(input);
  console.log(result);  
  