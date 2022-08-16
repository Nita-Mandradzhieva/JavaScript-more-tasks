function pizzaPoints(clients, minPrice, minNumberOfOrders) {
  // clients.map ((c) => {
  // })

  let count = 0;
  for (const c in clients) {
    // console.log(c); // we see keys(names)
    console.log(`${clients[c]}`); // we see values(price)
    // count += parseInt(clients[c]);
    // console.log(count);
  }
}

pizzaPoints(
  {
    DimitarTrendafilov: [5.5, 4.5, 6, 3],
    IvanVladimirov: [4, 7.2, 6],
    VasilDudinski: [18.5],
    NikiAngelov: [3.5, 3.5, 2.5, 3, 4],
  },
  16.9,
  3
);
