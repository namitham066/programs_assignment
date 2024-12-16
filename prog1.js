// Analyze the given input and output, write a program accordingly

// Input a = [2,3,4,5,3,3,5,2,5,3] and Output [ 5, 5, 5, 4, 3, 3, 3, 3, 2, 2]



const a = [2, 3, 4, 5, 3, 3, 5, 2, 5, 3];


function sort(arr) {
  const array = {};
  for (let num of arr) {
    array[num] = (array[num] || 0) + 1;
  }

  return arr.sort((a, b) => {
   
    if (array[b] !== array[a]) {
      return array[b] - array[a];
    }
  
    return b - a;
  });
}


const result = sort(a);
console.log(result);
