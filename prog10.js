// 10. Write a function to flatten a nested array.
let nestedArray = [1, [2, 3], [4, [5, 6]], 7];

function flatten(array) {
    let result = [];  

   for (let i = 0; i < array.length; i++) {
        
        if (Array.isArray(array[i])) {
            result = result.concat(flatten(array[i]));  
        } else {
            result.push(array[i]);
        }
    }

    return result;  
}


let flattenedArray = flatten(nestedArray);

console.log("Original nested array:", nestedArray);
console.log("Flattened array:", flattenedArray);