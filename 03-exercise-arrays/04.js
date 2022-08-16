function sumVolumeOfBoxes() {
  let multipleNUmbers = 0;
  let sumOfTheAllNUmbers = 0;

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      multipleNUmbers *= arguments[i];
    }
  }

  console.log(multipleNUmbers);
  //   console.log(arguments.length);
  //   console.log(arguments[0]);
  //   console.log(arguments[1]);
}

// sumVolumeOfBoxes([1, 2, 1], [2, 2, 2], [3, 1, 2]);
sumVolumeOfBoxes([2, 2, 2], [3, 2, 2]);
