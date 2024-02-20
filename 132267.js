const solution = (a, b, n, c) => {
  const change = n % a;
  const share = Math.floor(n / a) * b;
  let result = (c || 0) + share;
  if (share) {
    return solution(a, b, share + change, result);
  }
  return result;
};

const solution2 = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
