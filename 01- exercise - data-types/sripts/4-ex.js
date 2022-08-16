function compareTwoNumbers() {
  document.getElementById("nameOfTask").innerHTML = "Closer to 100";

  setTimeout(() => {
    let numberOne = prompt("Please enter your number one: ");
    let numberTwo = prompt("Please enter your number two: ");

    let result;
    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);

    let razlikaNumberOne = 100 - numberOne;
    console.log(razlikaNumberOne); //93

    let razlikaNumberTwo = 100 - numberTwo;
    console.log(razlikaNumberTwo); //95

    if (razlikaNumberOne > razlikaNumberTwo) {
      result = numberTwo;
      console.log(result);
    } else if (razlikaNumberTwo > razlikaNumberOne) {
      result = numberOne;
      console.log(result);
    }

    document.getElementById("result-text").innerHTML =
      "The result is" + " " + result;
  }, "1000");
}

// Not correct

// Append to the DOM not console.log()
