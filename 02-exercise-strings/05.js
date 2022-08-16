function switchedSymbols() {
  document.getElementById("nameOfTask").innerHTML = "Switched symbols";

  let text = prompt("Enter string: ");

  let textWithoutSpaces = text.trim();
  let firstSymbol = textWithoutSpaces.charAt(0);
  //   console.log(firstSymbol);
  let lastSymbol = textWithoutSpaces.charAt(text.length - 1);
  //   console.log(lastSymbol);

  let midleSymbols = textWithoutSpaces.substring(
    1,
    textWithoutSpaces.length - 1
  );
  //   console.log(midleSymbols);

  let message;

  if (text.length <= 1) {
    message = "Invalid string";
  } else {
    message = lastSymbol + midleSymbols + firstSymbol;
    console.log(message);
  }

  document.getElementById("result-text").innerHTML =
    "The result string is: " + message;
}
