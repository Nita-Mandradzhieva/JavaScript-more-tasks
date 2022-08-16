function mapLetterIndices(word) {
  let result = {};

  [...word].forEach((letter, index) => {
    // console.log(letter, index);
    if (!result.hasOwnProperty(letter)) {
      result[letter] = [index];
    } else {
      result[letter] = result[letter] + [index];
    }
  });

  console.log(result);
}

mapLetterIndices("dodo");
// mapLetterIndices("gagaga");
// mapLetterIndices("ivan");
