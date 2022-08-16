function guessRandomNumber(max, min) {
  document.getElementById("nameOfTask").innerHTML = "Guess the random number";
  let text = prompt("Enter number: ");
  text = parseInt(text);
  let randomNumber = Math.round(Math.random() * (max - min)) + min;
  let message = "";

  if (text === randomNumber) {
    message = "Good work!";
    // alert(message);
  } else if (text !== randomNumber) {
    message = "Try again.";
    // alert(message);
  }

  document.getElementById("result-text").innerHTML =
    "Guess or not guess? " + message;
}
// guessRandomNumber(80, 9000);

// function getRandomNumberFromRange(start, end) {
//   console.log(Math.floor(Math.random() * (end - start)) + start + 1);
// }

// getRandomNumberFromRange(500, 1000);
