// const cmy = {
//   cyan: 8,
//   magenta: 22,
//   yellow: 10,
// };

function inkLevels(cmy) {
  const values = Object.values(cmy);
  //   console.log(values);

  const minValue = Math.min(...values);
  console.log(minValue);
}

inkLevels({ cyan: 8, magenta: 22, yellow: 10 });
inkLevels({ cyan: 100, magenta: 400, yellow: 55 });
inkLevels({ cyan: 100, magenta: 40, yellow: 550 });
