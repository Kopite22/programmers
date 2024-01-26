const solution = (hp) => {
  const change = hp % 5;
  const change2 = change % 3;
  return Math.floor(hp / 5) + Math.floor(change / 3) + Math.floor(change2 / 1);
};
