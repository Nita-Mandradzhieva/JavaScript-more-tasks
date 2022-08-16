function calculateAnimalLegs(legsKokoshki, legsPigs, legsCows) {
  document.getElementById("nameOfTask").innerHTML = "Sum of legs";

  setTimeout(() => {
    let text = prompt("Please enter the number of chickens");
    let text2 = prompt("Please enter the number of pings");
    let text3 = prompt("Please enter the number of cows");

    let legsOfKokoshki = legsKokoshki * 2;
    let legsOfPings = legsPigs * 4;
    let legsOfCows = legsCows * 4;

    let allLegs = legsOfKokoshki + legsOfPings + legsOfCows;

    document.getElementById(
      "result-text"
    ).innerHTML = `Total number of legs is: ${allLegs}`;
  }, "1000");
}
