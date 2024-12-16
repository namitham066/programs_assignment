// 31. Write a function to merge two arrays with extra zeros.
function mergeArraysWithZeros(arr1, arr2) {
    let result = [];
    let maxLength = Math.max(arr1.length, arr2.length);  
    
    
    for (let i = 0; i < maxLength; i++) {
      if (i < arr1.length) {
        result.push(arr1[i], 0);  
      }
      if (i < arr2.length) {
        result.push(arr2[i], 0);  
      }
    }
  
    return result;
  }
  
  
  let arr1 = [1, 3, 5];
  let arr2 = [2, 4, 6, 8];
  
  let mergedResult = mergeArraysWithZeros(arr1, arr2);
  console.log(mergedResult);
  