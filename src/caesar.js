// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const lookup = "abcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {

    if(!shift || shift < -25 || shift === 0 || shift > 25) return false

    input = input.toLowerCase();
    if (encode === false){
      shift = shift * -1
    }
    let result = '';
    for(let i = 0; i < input.length; i++){
      if(input[i] === ' ' || !lookup.includes(input[i])){
        result += input[i]
      }else{
        const foundIndex = lookup.indexOf(input[i])

        let shiftedIndex = foundIndex + shift;
        
        if(shiftedIndex > 25){
          shiftedIndex = shiftedIndex - lookup.length;
        }

        if (shiftedIndex < 0){
          shiftedIndex = lookup.length + shiftedIndex
        }

        const shiftedChar = lookup.charAt(shiftedIndex)
        result += shiftedChar
      }
    }
    return result;
  }
  console.log(caesar("abcd", -6))

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
