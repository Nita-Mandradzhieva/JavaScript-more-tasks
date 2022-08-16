function oddOrEvenValue(array) {
  let isEvenOrOdd;
  for (let i = 0; i < array.length; i++) {
    // array[i] % 2 == 0
    //   ? console.log(`${array[i]} is even`)
    //   : console.log(`${array[i]} is odd`);

    // i % 2 == 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);

    // if (array[i] % 2 == 0 && i % 2 == 0) {
    //   isEvenOrOdd = true;
    // } else if (array[i] % 2 == 1 && i % 2 == 1) {
    //   isEvenOrOdd = true;
    // } else if (array[i] % 2 == 0 && i % 2 == 1) {
    //   isEvenOrOdd = false;
    // } else if (array[i] % 2 == 1 && i % 2 == 0) {
    //   isEvenOrOdd = false;
    // }

    // if (array[i] % 2 == 0 && i % 2 == 0) {
    //   isEvenOrOdd = true;
    // } else if (array[i] % 2 == 1 && i % 2 == 1) {
    //   isEvenOrOdd = true;
    // } else {
    //   isEvenOrOdd = false;
    // }

    if (
      (array[i] % 2 === 0 && i % 2 === 0) ||
      (array[i] % 2 === 1 && i % 2 === 1)
    ) {
      isEvenOrOdd = true;
    } else {
      isEvenOrOdd = false;
    }
  }
  console.log(isEvenOrOdd);
}

oddOrEvenValue([0, 1, 2, 3]);
oddOrEvenValue([0, 1, 2, 2]);
