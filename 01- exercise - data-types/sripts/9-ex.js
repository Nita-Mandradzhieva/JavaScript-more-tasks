function calculateBasketballPionts(twoPointers, threePointers) {
  document.getElementById("nameOfTask").innerHTML =
    "Points from basketball play";

  setTimeout(() => {
    let text = prompt("Please enter points");

    let points2 = twoPointers * 2;
    let points3 = threePointers * 3;

    let result = points2 + points3;

    document.getElementById("result-text").innerHTML = `Points are ${result}`;
  }, "1000");
}
