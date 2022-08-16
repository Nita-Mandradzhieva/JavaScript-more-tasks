function capitalizeString() {
  document.getElementById("nameOfTask").innerHTML = "Capitalize strings";

  let text = prompt("Enter string: ");
  let firstLetter = text.charAt(0).toUpperCase();
  let theRestOfTheString = text.substring(1, text.length).toLowerCase();

  const finalString = firstLetter + theRestOfTheString;

  document.getElementById("result-text").innerHTML =
    "Capitalized string is: " + finalString;
}
