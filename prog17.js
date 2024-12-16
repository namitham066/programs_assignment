// 17.  Write a function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; 
    } else {
      return n * factorial(n - 1); 
    }
  }
  let num = 5;
  console.log(factorial(num)); 
