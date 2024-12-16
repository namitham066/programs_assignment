// 27.  Write a function to find the second largest number in a nested array.
const nestedArray = [[1, 4, 3], [10, 20], [5, 8]];

function SecondLargest(nestedArray) {
    console.log("Nested Array:", nestedArray);

    let flatArray = [];
    for (let i = 0; i < nestedArray.length; i++) {
        for (let j = 0; j < nestedArray[i].length; j++) {
            flatArray.push(nestedArray[i][j]);
        }
    }
    let max = flatArray[0];
    let secondMax = flatArray[0];

    for (let i = 1; i < flatArray.length; i++) {
        if (flatArray[i] > max) {
            secondMax = max;
            max = flatArray[i];
        } else if (flatArray[i] > secondMax && flatArray[i] < max) {
            secondMax = flatArray[i];
        }
    }

    return secondMax;
}

console.log("Second Largest Number:", SecondLargest(nestedArray));