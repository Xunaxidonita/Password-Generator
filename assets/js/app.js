//Welcoming
alert("Welcome to the password generator");

var generateBtn = document.getElementById("Generate");
const LOWER = "lowers";
const SYMBOL = "symbols";
const UPPER = "uppers";
const NUMBER = "numbers";

const LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const SYMBOLS = ["!", "@", "#", "$", "%", "^", "&", "(", ")", "-", "_", "?"];

//Function that checks que length is between 8 and 128 characters.
var checkRightRange = function () {
  var alertMessage = "";
  do {
    var rightLength = 0;
    var possibleLength = prompt(
      alertMessage + "Choose a length between 8 and 128"
    );
    rightLength = parseInt(possibleLength);
    // check and store extra message
    alertMessage = "Not a valid option. ";
  } while (rightLength < 8 || rightLength > 128 || isNaN(rightLength));
  return rightLength;
};

//Function to ask if the user wants to generate a new password.
function initiate() {
  //debugger;
  var lowercase = confirm("Do you want to generate a new password?");
  if (lowercase === true) {
    var typeList = [LOWER];
    var passLength = checkRightRange();
    var specChar = confirm("Do you want to include special characters?");
    if (specChar) {
      typeList.push(SYMBOL);
    }
    var numbers = confirm("Do you want to include numbers?");
    if (numbers) {
      typeList.push(NUMBER);
    }
    //debugger;
    var uppercase = confirm("Do you want to include uppercase letters?");
    if (uppercase) {
      typeList.push(UPPER);
    }
    //debugger;
    var Password = gen(typeList, passLength);
    alert("Your password is " + Password);
  } else {
    alert("Another time then. Bye!");
  }
}
var gen = function (array, num) {
  var Password = "";
  while (Password.length < num) {
    let tempArray = cloneArray(array);
    while (tempArray.length > 0) {
      let sourceArray = aleatory(tempArray);
      let index = tempArray.indexOf(sourceArray);
      tempArray.splice(index, 1);
      if (sourceArray === SYMBOL) {
        Password = Password.concat(aleatory(SYMBOLS));
      } else if (sourceArray === NUMBER) {
        Password = Password.concat(Math.floor(Math.random() * 9));
      } else if (sourceArray === UPPER) {
        let letter = aleatory(LETTERS);
        Password = Password.concat(letter.toUpperCase());
      } else if (sourceArray === LOWER) {
        Password = Password.concat(aleatory(LETTERS));
      }
    }
  }
  return Password;
};

var aleatory = function (array) {
  var elementX = array[Math.floor(Math.random() * (array.length - 1))];
  return elementX;
};

var cloneArray = function (array) {
  let newArray = [];
  array.forEach((element) => newArray.push(element));
  return newArray;
};
//debugger;
generateBtn.onclick = initiate;
