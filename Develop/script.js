  // Assignment Code 
  let generateBtn = document.querySelector("#generate");

  //Arrays 
  let upperLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let lowerLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let onlySpecial = [' ','!','"','#','$','%','&','()','*','+',',','-','.','/',':',';','<','=','>','?','@','[','',']','^','_','`','{','|','}','~'];
  let onlyNumbers = ['0','1','2','3','4','5','6','7','8','9'];
  
  let pwd = [];
  
  // other Arrays for writePassword
  characterlength = "";
  includeUppercase = upperLetter;
  includeLowercase = lowerLetter;
  includeSpecial = onlySpecial;
  includeNumbers = onlyNumbers; 
   
  
  // Write password to the #password input
  function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  // My Prompts
  
  function generatePassword() { 
    let characterlength = prompt("How many characters would you like your password to have?");
  
      if (characterlength < 8) {
     
      alert("Your password needs to be more than 8 characters. Try Again.");
  
      return;
  
      }
      else if(characterlength > 128) {
  
      alert("Your password needs to be less than 128 characters. Try Again.");
      
      return;
  
      }
  
      if (characterlength >8 ) {
  
      let includeUppercase = confirm("Click OK to include Uppercase Letters");

      let includeLowercase = confirm("Click OK to include Lowercase Letters");

      let includeSpecial = confirm("Click OK to include Special Characters");

      let includeNumbers = confirm("Click OK to include Numbers");
      }
  }

  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  