function average() {
  document.getElementById("nameOfTask").innerHTML = "Average sum of two digits";

  setTimeout(() => {
    let numberOne = prompt("Please enter your number one");
    let numberTwo = prompt("Please enter your number two");

    numberOne = parseInt(numberOne);
    numberTwo = parseInt(numberTwo);

    let averageSum = (numberOne + numberTwo) / 2;

    document.getElementById("result-text").innerHTML =
      `The average sum of ${numberOne} and ${numberTwo} is` +
      " " +
      Math.ceil(averageSum);
  }, "1000");
}
