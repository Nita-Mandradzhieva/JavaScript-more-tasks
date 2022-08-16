function timeToCookPasta() {
  document.getElementById("nameOfTask").innerHTML = "Time to cook pasta";

  let text = prompt("Enter number of people: ");

  text = parseInt(text);

  const prepareSouceInMinutes = 30;

  let neededPackets = Math.ceil(text / 4);
  const timeForOnePacketToBoilInMins = 20;
  let timeForPacketsToBOil = neededPackets * timeForOnePacketToBoilInMins;

  const timeForPastaToBoilInMins = 10;

  let preparationTime =
    prepareSouceInMinutes + timeForPacketsToBOil + timeForPacketsToBOil;

  document.getElementById(
    "result-text"
  ).innerHTML = `Time to cook pasta is ${preparationTime} minutes`;
}
