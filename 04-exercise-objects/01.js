let drinks = [
  {
    name: "cola",
    price: 2.5,
  },
  {
    name: "water",
    price: 1.5,
  },
  {
    name: "soda",
    price: 1.0,
  },
  {
    name: "wine",
    price: 3.5,
  },
  {
    name: "vodka",
    price: 4.0,
  },
];

function getDrinks(drinks) {
  let result = drinks.sort((a, b) => {
    return a.price - b.price;
  });

  drinks.forEach((e) => {
    console.log(`${e.price}`);
  });
  return result;
}

// getDrinks();
console.log(getDrinks(drinks));
