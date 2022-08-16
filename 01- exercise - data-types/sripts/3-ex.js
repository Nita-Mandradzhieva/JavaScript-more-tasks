function returnTrueFalseOrNull() {
  document.getElementById("nameOfTask").innerHTML =
    "Returns TRUE, FALSE or NULL";

  setTimeout(() => {
    let text = prompt("Please enter your number");

    text = parseInt(text);

    if (text > 0) {
      document.getElementById("result-text").innerHTML =
        "The return value is true";
    } else if (text < 0) {
      document.getElementById("result-text").innerHTML =
        "The return value is false";
    } else if (text === 0) {
      document.getElementById("result-text").innerHTML =
        "The return value is null";
    }
  }, "1000");
}
