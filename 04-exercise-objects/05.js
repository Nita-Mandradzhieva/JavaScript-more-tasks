let wines = [
  {
    name: "Don Perinion",
    price: 155.0,
  },
  {
    name: "Barbera",
    price: 150.0,
  },
  {
    name: "Cabernet Franc",
    price: 250.0,
  },
  {
    name: "Carignan",
    price: 300.0,
  },
];

// var secondMax = function () {
//   var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
//   var max = Math.max.apply(null, arr); // get the max of the array
//   arr.splice(arr.indexOf(max), 1); // remove max from the array
//   return Math.max.apply(null, arr); // get the 2nd max
// };

function getWine(wines) {
  switch (wines.length) {
    case 0:
      return null;

    case 1:
      return wines[0].name;

    default:
      return wines.sort((a, b) => b.price - a.price)[1].name;
  }

  //   if (wines.length === 0) {
  //     return null;
  //   } else if (wines.length === 1) {
  //     return wines[0].name;
  //   } else {
  //     return wines.sort((a, b) => b.price - a.price)[1];
  //   }
}

console.log(getWine(wines));
