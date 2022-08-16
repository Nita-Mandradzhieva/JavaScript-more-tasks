function findHidingWord() {
  document.getElementById("nameOfTask").innerHTML = "Find hiding word!";

  let text = prompt("Enter string: ");

  let letters = "";

  for (let i = 0; i < text.length; i++) {
    const element = text[i];

    if (element == element.toLowerCase()) {
      letters += element;
    }
  }

  document.getElementById("result-text").innerHTML = "The word is " + letters;
}
