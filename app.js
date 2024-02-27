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

let typeId = "02";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

if (typeId == "01") {
  type = "Tank Top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

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

if (colorId == "BL") {
  color = "Black";
} else if (colorId == "BU") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

switch (colorId) {
  case "BL":
    type = "Black";
    break;
  case "BU":
    type = "Blue";
    break;
  case "RD":
    type = "Red";
    break;
  case "PU":
    type = "Purple";
    break;  
  default:
    type = "White";
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}

switch (typeId) {
  case "S":
    type = "Small";
    break;
  case "M":
    type = "Medium";
    break;
  case "L":
    type = "Large";
    break;
  case "XL":
    type = "Extra Large";
    break;
  default:
    type = "One Size Fits All";
}
console.log(`Product: ${size} ${color} ${type}`)