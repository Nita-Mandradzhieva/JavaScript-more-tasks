function yearsInDays() {
  document.getElementById("nameOfTask").innerHTML = "Years into days";

  setTimeout(() => {
    let years = prompt("Please enter years");

    let days = parseInt(years) * 365;

    document.getElementById(
      "result-text"
    ).innerHTML = `${years} years are ${days} days`;
  }, "1000");
}
