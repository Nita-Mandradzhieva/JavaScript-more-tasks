function findWordInString() {
  document.getElementById("nameOfTask").innerHTML = "Find word in string";

  let text = prompt("Enter string: ");

  let word = "bomb";
  let message;
  let lowerCaseText = text.toLocaleLowerCase();

  console.log(lowerCaseText.search(word));

  if (lowerCaseText.search(word) !== -1) {
    message = "Duck";
  } else {
    message = "No bomb, relax.";
  }

  document.getElementById("result-text").innerHTML =
    "The result is:  " + message;
}

// findWordInString("Bobombword");
