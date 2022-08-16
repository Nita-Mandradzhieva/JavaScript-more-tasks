function receiveEmail() {
  document.getElementById("nameOfTask").innerHTML = "Receive email";

  let text = prompt("Enter your email: ");

  let result = text.split("@");
  let string = result[1];
  //   console.log(result);

  let finalResult = text.replace(string, "novarto.com");

  document.getElementById("result-text").innerHTML =
    "This is the new email " + finalResult;
}
