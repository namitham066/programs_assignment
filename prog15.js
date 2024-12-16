// 15.  Write a program to find the missing numbers in an array containing numbers from 1 to 100.
function Numbers(arr) {
    let missingNumbers = [];
    for (let i = 1; i <= 100; i++) {
      if (!arr.includes(i)) {
        missingNumbers.push(i); 
      }
    }
    
    return missingNumbers;
  }
  let arr = [1, 2, 3, 4, 6, 7, 8, 9, 10]; 
  console.log(Numbers(arr)); 
  