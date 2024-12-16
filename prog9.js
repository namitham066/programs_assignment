// 9. Write a function to remove duplicate arrays from an array of arrays.
function removeDuplicateArrays(arr) {
    
    let uniqueArrays = [];
    let seen = new Set();
  
    for (let subArray of arr) {
      let sortedString = JSON.stringify(subArray.sort());
        if (!seen.has(sortedString)) {
        uniqueArrays.push(subArray);
        seen.add(sortedString);
      }
    }
  
    return uniqueArrays;
  }
  
  
  let input = [
    [1, 2, 3],
    [3, 2, 1],
    [4, 5, 6],
    [1, 2, 3],
    [7, 8, 9]
  ];
  
  let result = removeDuplicateArrays(input);
  console.log(result);
  