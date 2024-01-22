const solution = (numbers, n) =>
  numbers.reduce((acc, cur) => (acc <= n ? (acc += cur) : acc), 0);
