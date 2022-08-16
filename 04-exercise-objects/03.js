function getFrequencies(arrayFreq) {
  // const obj = Object.assign({}, arrayFreq);
  // console.log(obj);

  //   const f = Object.fromEntries(arrayFreq);
  //   console.log(f);

  const result = {};
  arrayFreq.forEach((el) => {
    if (!result.hasOwnProperty(el)) {
      result[el] = 1; // add in object
    } else {
      result[el] = result[el] + 1; // if we already have the key that we add its number ++
    }
  });

  console.log(result);

  // const obj = arrayFreq.reduce((accumulator, value) => {
  //   return { ...accumulator, [value]: "" };
  // }, {});
  // console.log(obj);

  // const len = arrayFreq.length;
  // console.log(len);
}

getFrequencies(["A", "B", "A", "A", "A"]);
