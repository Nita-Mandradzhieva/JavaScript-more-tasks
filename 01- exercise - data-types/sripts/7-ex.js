function sum() {
  document.getElementById("nameOfTask").innerHTML =
    "Sum of the previous two ones numbers";

  setTimeout(() => {
    let text = prompt("Please enter your number");

    let result1 = text - 1;
    let result2 = result1 - 1;
    let add = result1 + result2;

    document.getElementById("result-text").innerHTML = "The sum is " + add;
  }, "1000");
}
