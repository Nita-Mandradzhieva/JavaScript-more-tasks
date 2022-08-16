function sumFormZeroToNumber() {
  document.getElementById("nameOfTask").innerHTML =
    "Sum of all till the number";
  setTimeout(() => {
    let text = prompt("Please enter your number");

    let sum = 0;

    for (let i = 0; i <= text; i++) {
      sum += i;
    }

    document.getElementById("result-text").innerHTML = "The sum is " + sum;
  }, "1000");
}
