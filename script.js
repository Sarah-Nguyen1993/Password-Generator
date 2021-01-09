// Arrays of characters that the user might choose
var specialCharacterChoices = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":"];
var numbersChoices = [0,1,2,3,4,5,6,7,8,9];
var upperCaseChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseChoices = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// generate the generatePassword function
function generatePassword(){
    //Questions to ask the user
    var characterNumbers = prompt("How many characters do you want for your password?\nYour password needs to have AT LEAST 8 characters and NO more than 128 characters.");
      if (characterNumbers>=8 && characterNumbers<=128){

        var numbers = confirm("Click OK to include numbers");
        var upperCase = confirm("Click OK to include uppercase characters");
        var lowerCase = confirm("Click OK to include lowercase characters");
        var specialCharacters = confirm("Click OK to include special characters");

        if (!numbers && !upperCase && !lowerCase && !specialCharacters) {
          alert("You have to include at least one type of characters!");
          passwordText.value = "";
        }
        else{
      
          // Set up a variable for the password 
          var pass = ""

          // Variable possibilities will contain character types that are chosen by the user
          var posibilities = []

          // After the user picks the type(s) of characters he/she wants, the password will have to contain at least one character of each type.
          //"If" statements below make sure that will happen before filling up the rest of the password
          // If number is chosen, one of the number from the numberChoices array will be randomly added to the password
          
          if (numbers) {
            var index = Math.floor(Math.random()*numbersChoices.length);
            var number = numbersChoices[index];
            pass = pass + number;
            // The possibilities will update the numberChoices into its array
            posibilities = posibilities.concat(numbersChoices);
          }

          // If upperCase is chosen, one of the uppercsase letter from the upperCaseChoices array will be randomly added to the password
          if(upperCase){
            var index = Math.floor(Math.random()*upperCaseChoices.length);
            var upper = upperCaseChoices[index];
            pass = pass + upper;
              // The possibilities will update the upperCaseChoices into its array
            posibilities = posibilities.concat(upperCaseChoices);
          }

          // If lowerCase is chosen, one of the lowercsase letter from the lowerCaseChoices array will be randomly added to the password
          if(lowerCase){
            var index = Math.floor(Math.random()*lowerCaseChoices.length);
            var lower = lowerCaseChoices[index];
            pass = pass + lower;
            // The possibilities will update the lowerCaseChoices into its array
            posibilities = posibilities.concat(lowerCaseChoices);
          }

          // If specialCharacter is chosen, one of the special Characters from the specialCharacterChoices array will be randomly added to the password
          if(specialCharacters){
            var index = Math.floor(Math.random()*specialCharacterChoices.length);
            var special = specialCharacterChoices[index];
            pass = pass + special;
            // The possibilities will update the specialCharacterChoices into its array
            posibilities = posibilities.concat(specialCharacterChoices);
          }
          
          var initLength = pass.length;

          // after at least one character of each chosen character type added, the remaining characters will be randomly picked up from the posibilities
          for (i=0; i< (characterNumbers-initLength); i++){
            var index = Math.floor(Math.random()*posibilities.length);
            var newchar = posibilities[index];
            pass = pass + newchar;
          }
          return pass;
        }
        return 0;
      }
      else if (characterNumbers === null){
        passwordText.value = "";
        return;
      }
      else if (characterNumbers < 8  ||characterNumbers > 128) {
        console.log(characterNumbers);
        alert("Your password has to be AT LEAST 8 character long and NO more than 128 characters!");
        passwordText.value = "";
      }
      
}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

