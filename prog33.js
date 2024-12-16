// 33.  Write a deep clone function to create a copy of a nested object or array without any reference to the original.


function deepClone(obj) {
  
    if (typeof obj !== "object" || obj === null) {
      return obj; 
    }
  
   const clone = Array.isArray(obj) ? [] : {};
   for (let key in obj) {
    
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key]);
      }
    }
  
    return clone;
  }
  
 
  const original = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding", "gaming"],
    address: {
      city: "New York",
      zip: "10001",
    },
  };
  
  const cloned = deepClone(original);
  cloned.name = "Doe";
  cloned.hobbies.push("music");
  cloned.address.city = "Los Angeles";
  
  console.log("Original:", original);
  console.log("Cloned:", cloned);
  