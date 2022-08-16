function progressDay(array) {
  let numberOfProgressDays = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      numberOfProgressDays++;
    }
  }
  console.log(numberOfProgressDays);
}

progressDay([10, 11, 12, 9, 10]);
progressDay([6, 5, 4, 3, 2, 9]);
progressDay([5, 5]);
