


//prompt for type of characters to be used
function createPassword() {

  let arrLowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let arrUpperChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let arrSpecialChar = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', "^", '_', '`', '{', "|", '}', "~",]
  let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  let passwordLength = prompt("Please pick a password length between 8 and 128 characters.")
  let message = alert("Please confirm what type of characters to use.")
  let lowercase = confirm("Lowercase characters")
  let uppercase = confirm("Uppercase characters")
  let numeric = confirm("Numeric characters")
  let specialChar = confirm("special character")
  let password2 = [];
  let choiceCount = 0;



  for (let i = 0; i < passwordLength; i++) {
    if (lowercase === true) {
      password2.push(arrLowerChar[Math.floor(Math.random() * arrLowerChar.length)])
      choiceCount++
    } if (uppercase === true) {
      password2.push(arrUpperChar[Math.floor(Math.random() * arrUpperChar.length)])
      choiceCount++
    } if (specialChar === true) {
      password2.push(arrSpecialChar[Math.floor(Math.random() * arrSpecialChar.length)])
      choiceCount++
    } if (numeric === true) {
      password2.push(arrNum[Math.floor(Math.random() * arrNum.length)])
      choiceCount++
    }
  }

  let yourPassword = password2.join('');

  console.log(yourPassword);
  document.getElementById("password").innerHTML = yourPassword;
}


