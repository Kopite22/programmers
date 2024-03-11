const solution = (k, m, score) => {
  let result = 0;
  const temp = [...score].sort((a, b) => b - a);
  const box = Math.trunc(score.length / m);
  for (let i = 1; i <= box; i++) {
    result += temp[i * m - 1] * m;
  }
  return result;
};
