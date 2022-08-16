function findNemo(string) {
  const nameNemo = "Nemo";
  let words = "";

  let array = string.split(" ");
  console.log(array);

  let result = array.findIndex((arrayElement) => arrayElement === nameNemo);

  console.log(result + 1);
}
findNemo("I am Nemo");
findNemo("I am finding Nemo");
