// 19. Filter numeric palindromes from the input array
function isPalindrome(num) {
  let str = num.toString();  
  let reversedStr = str.split('').reverse().join('');  
  return str === reversedStr;  
}

function filterPalindromes(arr) {
  return arr.filter(num => isPalindrome(num));  
}

let input = [121, 123, 454, 789, 1221];
let palindromes = filterPalindromes(input);
console.log("Numeric Palindromes:", palindromes);

  