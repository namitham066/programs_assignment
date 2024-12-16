// Write a function to generate the specified pattern.

// 1

// 2 9

// 3 8 10

// 4 7 11 14

// 5 6 12 13 15

function generatePattern() {
    const rows = 5; 

    
    const rowIncrements = [
        [],                
        [],                
        [7],               
        [5, 2],            
        [3, 4, 3],         
        [1, 6, 1, 2]       
    ];

    let matrix = []; 

    for (let i = 1; i <= rows; i++) {
        let row = [];
        let value = i; 
        
        row.push(value);
        for (let j = 0; j < rowIncrements[i].length; j++) {
            value += rowIncrements[i][j];
            row.push(value);
        }
        matrix.push(row);
    }

    
    matrix.forEach(row => console.log(row.join(' ')));
}

generatePattern()