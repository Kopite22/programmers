const solution = (x, n) =>
  Array.from({ length: n }, () => undefined).map((_, i) => x * (i + 1));
