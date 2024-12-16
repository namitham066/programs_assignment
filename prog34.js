// 34. Write a function to find how many times each element is repeated in an array.
function countOccurrences(arr) {
    let count = {};  

    for (let num of arr) {
      if (count[num] === undefined) {
        count[num] = 1;  
      } else {
        count[num] += 1; 
      }
    }
  
    return count;  
  }
  
  
  let input = [2, 3, 4, 5, 3, 3, 5, 2, 5, 3];
  let result = countOccurrences(input);
  console.log(result);  
  