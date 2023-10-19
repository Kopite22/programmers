function solution2(n) {
  let count = 0;
  for (let i = 1; i < Math.sqrt(n); i++) if (n % i === 0) count += 2;

  return Number.isInteger(Math.sqrt(n)) ? count + 1 : count;
}

function solution(n) {
  let count = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count + 1;
}
