function convertor() {
  document.getElementById("nameOfTask").innerHTML =
    "From Celsius to Fahrenheit";

  let text = prompt("Please enter your Celsius degrees");

  let result = text * 1.79549;

  document.getElementById("result-text").innerHTML =
    "Hello your Fahrenheit degrees are" + " " + result;
}

// check what would happen if you type string into the prompt - ok
// covert the prompt result into a number
// change the name of the variable that is used to store the returning value of the prompt()
