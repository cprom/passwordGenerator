
function createPassword() {

  let arrLowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let arrUpperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let arrSpecialChar = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', "^", '_', '`', '{', "|", '}', "~",]
  let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let password2 = [];
  let newPassword = [];
  let passFirstFour = ''

  //prompt for type number of characters 
  let passwordLength = parseInt(prompt("Please enter a password length between 8 and 128 characters."));
  //validate that character length to between 8 and 128 and is a number
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    //alert("That's not right!");
    passwordLength = prompt("Length must be between 8 and 128 characters.");

  }

  //prompt for characters used
  let message = alert("Please confirm what type of characters to use.")
  let lowercase = confirm("Lowercase characters")
  let uppercase = confirm("Uppercase characters")
  let numeric = confirm("Numeric characters")
  let specialChar = confirm("Special character")


  //iterate through array if user prompts are true and create a new array of characters

  for (let i = 0; i < passwordLength; i++) {
    if (lowercase === true) {
      password2.push(arrLowerChar[Math.floor(Math.random() * arrLowerChar.length)])

    }
    if (uppercase === true) {
      password2.push(arrUpperChar[Math.floor(Math.random() * arrUpperChar.length)])

    } if (specialChar === true) {
      password2.push(arrSpecialChar[Math.floor(Math.random() * arrSpecialChar.length)])

    } if (numeric === true) {
      password2.push(arrNum[Math.floor(Math.random() * arrNum.length)])

    }


  }
  // first 4 character from password2 will always meet user characters selection.  create string of first 4 characters from password2 array
  passFirstFour = password2[0] + password2[1] + password2[2] + password2[3]


  // loop through new array that was created to create another array with length equal to user's input minus 4 first characters
  // console.log(password2)
  for (let i = 0; i < passwordLength - 4; i++) {
    newPassword.push(password2[Math.floor(Math.random() * password2.length)])


  }

  //user .join method to create string out of newPassword array then concat first 4 char of password with new password string
  let yourPassword = newPassword.join('') + passFirstFour


  //shuffle new string to make final password using sort
  let finalPassword = yourPassword.split('');
  finalPassword.sort(function () { return 0.5 - Math.random() });
  finalPassword = finalPassword.join('');

  //output password to text area in index.html
  document.getElementById("password").innerHTML = finalPassword;
}


