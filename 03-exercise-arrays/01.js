const isItTrue = (array) => array.every((element) => element === true);

console.log(isItTrue([true, true, true]));
console.log(isItTrue([true, false, true]));
