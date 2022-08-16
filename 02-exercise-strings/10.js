function calculatePercents() {
  document.getElementById("nameOfTask").innerHTML = "Calculate percents";

  let originalPrice = prompt("Enter original price: ");
  let yearsOfCar = prompt("Enter years of car: ");

  originalPrice = parseInt(originalPrice);
  yearsOfCar = parseInt(yearsOfCar);

  if (yearsOfCar < 3) {
    originalPrice = originalPrice * (80 / 100);
  } else if (yearsOfCar > 3 && yearsOfCar < 10) {
    originalPrice = originalPrice * (50 / 100);
  } else {
    originalPrice = originalPrice * (30 / 100);
  }

  document.getElementById("result-text").innerHTML =
    "The price is:  " + originalPrice;
}
