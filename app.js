console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);0
// Exercise 1: Guessing Game

let magicNumber = 7;

//Get the user's guess
//Return a string
let guessNumber = prompt("What is the magic number?");

//Convert the guess to a number
guessNumber = parseInt(guessNumber);

//Validate Input (is it a number?)
if (isNaN(guessNumber)) {
  console.log("Guess is not a valid number!");
} else {
  //Game logic with valid input
  if (guessNumber == magicNumber) {
  console.log("Congratulation!!!");
  } else if (guessNumber > magicNumber) {
  console.log("Too high!");
  } else {
  console.log("Too low!");
  }
}

// Exercise 2: Birth month and season
let birthMonth = prompt("What is your birth month?"); // "JULY" => "july"

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;
  case "september":
  case "october":
  case "november":
    console.log("Fall");
    break;
  default:
    console.log("Month wasn't recognized.")
}

// Exercise 3: Business Logic between Apparell Coders

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;  
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}
console.log(`Product: ${size} ${color} ${type}`)