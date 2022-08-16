function mirrorArray(array) {
  //   for (let i = 0; i < array.length; i++) {
  //     array[i].reverse();
  //   }
  let newArray = array.reverse();

  let twoArrays = array.concat(newArray);
  console.log(twoArrays);
}
mirrorArray([1, 2, 3, true, false, 5]);
