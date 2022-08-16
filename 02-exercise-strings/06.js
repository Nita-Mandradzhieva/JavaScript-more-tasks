function sameOrNot() {
  document.getElementById("nameOfTask").innerHTML = "Same ot not?";

  let text = prompt("Enter string: ");

  let javaOrNot = "java";
  //   console.log(javaOrNot);
  let firstFourLetters = text.substring(0, 4);
  console.log(firstFourLetters);
  console.log(firstFourLetters.toLowerCase());

  let result;

  if (firstFourLetters.toLowerCase() === javaOrNot) {
    result = true;
  } else {
    result = false;
  }

  document.getElementById("result-text").innerHTML = "It is  " + result;
}
