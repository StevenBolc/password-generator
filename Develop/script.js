// Assignment Code
var generateBtn =document.querySelector("#generate");



function passGen() {
 var length = window.prompt ("choose a password length between 8-128")
char = "abcdefghijklmnopqrstuvwxyz".toUpperCase
num = "1234567890"
spec ="!@#$%^&*()"
passwordText = [""]
  for (i = 0; i < length; i++){
    passwordText += char.charAt(Math.floor(math.random() * char.length * num.length * spec.length))
    return passwordText
  }
};




// Write password to the #password input

function writePassword() {
  var password =generatePassword();
  var passwordText =document.querySelector("#password");

  passwordText.value = password;
  
}

 
// Add event listener to generate button
generateBtn.addEventListener("click", passGen);
generateBtn.addEventListener("show", writePassword);



/*// Stores user response in variable
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  // Creates element based on tag entered by user
  var tag = document.createElement(tagName);

  // Adds text content to created tag
  tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
  // Appends tag as child of document body
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");

if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
    document.body.appendChild(secondTag);
  }
}*/

