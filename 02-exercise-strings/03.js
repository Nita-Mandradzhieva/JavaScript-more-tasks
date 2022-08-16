function politeString() {
  document.getElementById("nameOfTask").innerHTML = "Is it question?";
  let text = prompt("Enter string: ");

  const lastChar = text.charAt(text.length - 1);
  let addToString;

  if (lastChar === "?") {
    addToString = text.replace("?", ", please?");
    // addToString = text + " , please";
  } else if (lastChar !== ".") {
    addToString = text + ".";
  } else if (lastChar === ".") {
    addToString = text;
  }

  document.getElementById("result-text").innerHTML =
    "Your polite string is: " + addToString;
}
