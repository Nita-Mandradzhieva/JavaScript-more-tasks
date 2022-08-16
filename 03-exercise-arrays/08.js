function removeDuplicates(array) {
  let duplicates = [...new Set(array)];
  console.log(duplicates);
}

removeDuplicates([1, 0, 1, 0]);
removeDuplicates(["Dimitar", "Ivan", "Ivan", "Vasil", "Niki"]);
