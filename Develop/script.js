// Assignment Code
var generateBtn =document.querySelector("#generate");



 //adds prompt functionality
function getPrompt() {
 
  // adds initial propmt
  entry = prompt("enter a number between 8-128 characters");
  entry = parseInt(entry);

  if (entry >= 8 && entry <= 128) {
      return entry;
  // returns in error if credentials arent met
  } else {
      window.alert("Not enough/ too many numbers");
      return getPrompt();
  }
}

// adds choice functionality
function getQuestions() {

  // gives questions for user to answer 
  var questions = {
      lowercase: confirm("Would you like lowercase letters?"),
      uppercase: confirm("What about uppercase letters?"),
      numbers: confirm("Would you like numbers in your password?"),
      specialChar: confirm("what about special characters?")
  };

  if (questions.lowercase || questions.uppercase || questions.numbers || questions.specialChar) {
      return questions;
 // specifies that user needs more characters
  } else {
      window.alert("You need a more secure password.");
      return getQuestions();
  }
}

// generates password 
function genPass() {

  var length = getPrompt();
  var answers = getQuestions();
  var pass = "";
  var passwordChars = [];
 // adds array list of available characters
  var characters = {
      uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
      lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
      numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
      specialChar: ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "-", "="]
  };
  // allows array lists to combine
  if (answers.lowercase) {
      passwordChars = passwordChars.concat(characters.lowercase);
  }
  if (answers.uppercase) {
      passwordChars = passwordChars.concat(characters.uppercase);
  }
  if (answers.numbers) {
      passwordChars = passwordChars.concat(characters.numbers);
  }
  if (answers.specialChar) {
      passwordChars = passwordChars.concat(characters.specialChar);
  }
  // allows numbers and letters to be combined
  for (i = 1; i <= length; i++) {

    var char = Math.floor(Math.random() * passwordChars.length + 1);
    pass += passwordChars[char];
}

  return pass;
}

function writePass() {

  var password = genPass();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePass);