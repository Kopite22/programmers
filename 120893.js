const solution = (s) =>
  [...s]
    .map((v) => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()))
    .join('');
