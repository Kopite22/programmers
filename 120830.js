const n = 30;
const k = 3;

function solution(n, k) {
  const service = parseInt(n / 10);
  const price = n * 12000 + (k - service) * 2000;
  return price;
}

console.log(solution(n, k));
