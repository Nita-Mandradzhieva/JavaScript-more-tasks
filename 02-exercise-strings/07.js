function dayMonthYear(dateOne, dateTwo) {
  // document.getElementById("nameOfTask").innerHTML = "Day, month and year";

  // let dateOneInput = prompt("Enter date number one: ");
  // let dateTwoInput = prompt("Enter date number two: ");

  // const dateOne = new Date(dateOneInput);
  // const dateTwo = new Date(dateTwoInput);
  let result = 0;

  if (dateOne.getFullYear > dateTwo.getFullYear) {
    result = dateOne;
  } else if (dateOne.getFullYear < dateTwo.getFullYear) {
    result = dateTwo;
  } else if (dateOne.getMonth > dateTwo.getMonth) {
    result = dateOne;
  } else if (dateOne.getMonth < dateTwo.getMonth) {
    result = dateTwo;
  } else if (dateOne.getDay < dateTwo.getDay) {
    result = dateOne;
  } else {
    result = dateTwo;
  }

  console.log(result);
  // document.getElementById("result-text").innerHTML = "It is  " + result;
}

dayMonthYear(22 / 04 / 2020, 22 / 04 / 2024);
