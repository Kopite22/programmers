const solution = (price, money, count) => {
  const total = Array.from({ length: count }, (_, i) => i + 1).reduce(
    (acc, cur) => (acc += cur * price),
    0,
  );
  return total - money < 0 ? 0 : total - money;
};
