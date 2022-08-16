function isAscOrDesc(arrayFromNumbers, text) {
  if (text === "ASC") {
    arrayFromNumbers.sort(function (a, b) {
      return a - b;
    });
  } else if (text === "DESC") {
    arrayFromNumbers.sort(function (a, b) {
      return b - a;
    });
  }

  console.log(arrayFromNumbers);
}

isAscOrDesc([45, 23, 10], "ASC");
isAscOrDesc([11, 21, 17], "DESC");
