// 25. Write a function to remove duplicate characters in a string.
let input = "programming";
    console.log("Original String:", input);

    function Characters(string) {
    let uniqueCharacters = [];
        for (let i = 0; i < string.length; i++) {
            if (!uniqueCharacters.includes(string[i])) {
                uniqueCharacters.push(string[i]);
            }
        }
            return uniqueCharacters.join(""); 
        }

        let result = Characters(input);
        console.log("String without duplicates:", result);
