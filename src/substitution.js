// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input = "", alphabet = "", encode = true) {
    if (!alphabet || alphabet.length !== 26){
      return false
    }
    const charMap = {}; // Object to store the count of characters
  
    for (let i = 0; i < alphabet.length; i++) {
      const char = alphabet[i];
      if (charMap[char]) {
        // If the character already exists in the map, it's a repeat
        return false;
      } else {
        // Otherwise, add it to the map
        charMap[char] = true;
      }
    }
    //let assigner = "xoyqmcgrukswaflnthdjpzibev"
    let lookup = "abcdefghijklmnopqrstuvwxyz"
    let result = ""

    if (encode){
     for (let i = 0; i < input.length; i++){
      if (input[i] === " "){
        result += input[i]
      }
      for (let j = 0; j < lookup.length; j++){
        if (lookup[j] === input[i]){
          result += alphabet[j]
        }
      }
     }
    }
    if (encode === false){
      
      for (let i = 0; i < input.length; i++){
        if (input[i] === " "){
          result += input[i]
        }
       //console.log("text")
        for (let j = 0; j < alphabet.length; j++){
          if (alphabet[j] === input[i]){
            result += lookup[j]
          }
        }
      }
      
    }
  
    //console.log(result)
    return result
    
    }
   

  console.log(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false));

  return {
    substitution,
  };
})();



module.exports = { substitution: substitutionModule.substitution };