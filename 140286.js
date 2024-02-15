const solution = (s) => {
  return [...s].map((v, i) => {
    const count = s.slice(0, i).lastIndexOf(v);
    return count === -1 ? -1 : i - count;
  });
};
