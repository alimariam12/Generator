  // Assignment Code 
  let generateBtn = document.querySelector("#generate");

  // Arrays of uppercase letters, lowercase letters, special character, and numbers.
  let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let onlySpecial = [' ','!','"','#','$','%','&','()','*','+',',','-','.','/',':',';','<','=','>','?','@','[','',']','^','_','`','{','|','}','~'];
  let onlyNumbers = ['0','1','2','3','4','5','6','7','8','9'];
  
  // Variables
  let password = []; 
  let placeholder = []; 
  // My Prompts
  
  function generatePassword() { 
    let characterlength = prompt("How many characters would you like your password to have?");
  
      if (characterlength < 8) {
      alert("Your password needs to be more than 8 characters. Try Again.");
        return placeholder;
      }
      if (characterlength > 128) {
      alert("Your password needs to be less than 128 characters. Try Again.");
      return placeholder;
      }

      if (characterlength < 128 || characterlength > 8){
        let uppercaseInclude = confirm("Click OK to include Uppercase Letters");

        let lowercaseInclude = confirm("Click OK to include Lowercase Letters");

        let specialInclude = confirm("Click OK to include Special Characters");

        let numbersInclude = confirm("Click OK to include Numbers");

      if (uppercaseInclude === false && lowercaseInclude === false && specialInclude === false && numbersInclude === false) {
        alert("Pick at Least on Criteria!");
        return placeholder;
      }
      


      if ( uppercaseInclude) {
        password = password.concat(upperCase);
      }
      if ( lowercaseInclude) {
        password = password.concat(lowerCase);
      }
      if ( numbersInclude) {
        password = password.concat(onlyNumbers);
      }
      if ( specialInclude) {
        password = password.concat(onlySpecial);
      }
    }

  
let randomizeCharacter = [];

for (let i = 0; i < characterlength; i++) {
  randomizeCharacter = randomizeCharacter + password[Math.floor(Math.random() * password.length)];
  }
return randomizeCharacter;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  debugger;