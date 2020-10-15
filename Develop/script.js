// Assignment Code 
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


let intro = alert("Click the generate button so we can make you a password!");


function generatePassword() {

let upperLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowerLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let onlySpecial = [' ','!','"','#','$','%','&','()','*','+',',','-','.','/',':',';','<','=','>','?','@','[','',']','^','_','`','{','|','}','~'];
let onlyNumbers = ['0','1','2','3','4','5','6','7','8','9'];
 

// My Prompts

let characterlength = prompt("How many characters would you like your password to have?");

    if (characterlength <8) {
   
    alert("Your password needs to be more than 8 characters. Try Again.")

    return;

    }
    else if(characterlength > 128) {

    alert("Your password needs to be less than 128 characters.")
    
    return;

    }

    if (characterlength >8 ) {

      let includeUppercase = confirm("Click OK to include Uppercase letters");

      let includeLowercase = confirm("Click OK to include Lowercase letters");

      let includeSpecial = confirm("Click OK to include special characters");

      let includeNumbers = confirm("Click OK to include Numbers");
    }


  }


