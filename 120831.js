function solution(n) {
  const arr = Array.from({ length: n }, (v, i) => i + 1);
  return arr.reduce((acc, cur) => acc + (cur % 2 === 0 ? cur : 0), 0);
}

function solution(n) {
  let half = Math.floor(n / 2);
  return half * (half + 1);
}
