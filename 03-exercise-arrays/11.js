function specialMatrix(stringArray) {
  let rowSumOne = 0;
  let rowSumTwo = 0;
  let rowSumThree = 0;

  let colSumOne = 0;
  let colSumTwo = 0;
  let colSumThree = 0;

  let isItSpecial;

  let newArray = stringArray.map(function (element) {
    return element.split(" ").map((numberAsString) => {
      return Number(numberAsString);
    });
  });

  //   console.log(newArray);
  //   console.log(newArray[0]);
  //   console.log(newArray[1]);
  //   console.log(newArray[2]);

  //   console.log(newArray[0][0]); // 4
  //   console.log(newArray[0][1]); // 5
  //   console.log(newArray[0][2]); // 6

  //   console.log(newArray[1][0]); // 6
  //   console.log(newArray[1][1]); // 5
  //   console.log(newArray[1][2]); // 4

  //   console.log(newArray[2][0]); // 5
  //   console.log(newArray[2][1]); // 5
  //   console.log(newArray[2][2]); // 5

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      //   console.log(newArray[j]);

      if (i === 0) {
        rowSumOne += newArray[i][j];
      }
      //   console.log(newArray[i][j]);

      if (i === 1) {
        rowSumTwo += newArray[i][j];
      }

      if (i === 2) {
        rowSumThree += newArray[i][j];
      }

      if (j === 0) {
        colSumOne += newArray[i][j];
      }

      if (j === 1) {
        colSumTwo += newArray[i][j];
      }

      if (j === 2) {
        colSumThree += newArray[i][j];
      }
    }
  }

  console.log(rowSumOne);
  console.log(rowSumTwo);
  console.log(rowSumThree);

  console.log("------------");

  console.log(colSumOne);
  console.log(colSumTwo);
  console.log(colSumThree);

  if (
    rowSumOne === rowSumTwo &&
    rowSumOne === rowSumThree &&
    colSumOne === colSumTwo &&
    colSumOne === colSumThree
  ) {
    isItSpecial = true;
    console.log("true");
  } else {
    console.log("false");
  }
}

specialMatrix(["4 5 6", "6 5 4", "5 5 5"]);
specialMatrix(["1 0 0", "0 0 1", "0 1 0"]);
specialMatrix(["1 2 3", "1 2 3", "1 2 3"]);

// ["4 5 6", "6 5 4", "5 5 5"]
// [["4", "5", "6"], ["6", "5", "4"], ["5", "5", "5"]]
