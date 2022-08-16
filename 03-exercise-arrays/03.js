function sumOfNumberValues(array) {
  const onlyNumbers = array.filter((element) => typeof element === "number");
  //   console.log(onlyNumbers);

  const sumOfNumbers = onlyNumbers.reduce((accumulator, value) => {
    return accumulator + value;
  });

  console.log(sumOfNumbers);
}

sumOfNumberValues([1, 2, "3", true]);
sumOfNumberValues([1, 2, 3, true, false, "5", 2, [10]]);
