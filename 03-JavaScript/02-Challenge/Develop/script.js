// Assignment Code
var generateBtn = document.querySelector("#generate");

//Array generator function
function arrayCreator(lowest, highest){
  let arr = [];
  for(let i = lowest; i <= highest; i++){
    arr.push(i);
  }
  return arr;
}

function generatePassword(){

//Getting answers from user.
  let passwordLength = prompt("Please chose the length of the password between 8 and 128 characters.");
  if(passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("Please chose the length of the password between 8 and 128 characters.");
  }
  let passwordNum = confirm("Would you like to have numbers in your password?");
  let passwordUppercase = confirm("Would you like to have Uppercase letters in your password?");
  let passwordLowercase = confirm("Would you like to have Lowercase letters in your password?");
  let passwordSpecialCharacters = confirm("Would you like to have Special Characters in your password?");

  // Using ASCII Character Codes
  let uppercaseCharacters = arrayCreator(65, 90);
  let lowercaseCharacters = arrayCreator(97, 122);
  let numbers = arrayCreator(48, 57);
  let specialCharacters = arrayCreator(33, 47);

  let combinedArr = [];

  //Conditional statments for character types
  if(passwordUppercase === true){
    combinedArr = combinedArr.concat(uppercaseCharacters);
  }
  if(passwordSpecialCharacters === true){
    combinedArr = combinedArr.concat(specialCharacters);
  }
  if(passwordNum === true){
    combinedArr = combinedArr.concat(numbers);
  }
  if(passwordLowercase === true){
    combinedArr = combinedArr.concat(lowercaseCharacters);
  }

  let passwordChar = [];

  for(let i = 0; i <= passwordLength; i++){
    let char = combinedArr[Math.floor(Math.random() * combinedArr.length)];
    passwordChar.push(String.fromCharCode(char));
  }
  return passwordChar.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
