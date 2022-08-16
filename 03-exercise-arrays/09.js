function isFactorChain(array) {
  let isDivided;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] % array[i] === 0) {
      isDivided = true;
    } else if (array[i + 1] % array[i] !== 0) {
      isDivided = false;
      break;
    }
  }
  console.log(isDivided);
}

isFactorChain([4, 6, 12, 36]);

// isFactorChain([3, 6, 12, 36]);
// isFactorChain([2, 4, 8, 32]);
// isFactorChain([1, 1, 1, 1]);
// isFactorChain([10, 3]);
// isFactorChain([2, 4, 6]);
