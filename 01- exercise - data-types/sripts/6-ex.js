function minsToSecs() {
  document.getElementById("nameOfTask").innerHTML = "Minutes into seconds";

  setTimeout(() => {
    let mins = prompt("Please enter minutes :");

    let secs = parseInt(mins) * 60;

    // console.log(`The ${mins} mins are ${secs} secs`);

    document.getElementById(
      "result-text"
    ).innerHTML = `The  ${mins} mins are ${secs} secs`;
  }, "1000");
}
