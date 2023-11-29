function solution(n) {
  const numArr = Array.from({ length: n + 1 }, (v, i) => i);
  if (n % 2 === 0) {
    return numArr.reduce(
      (acc, cur) => (acc += cur % 2 === 0 ? Math.pow(cur, 2) : 0)
    );
  } else {
    return numArr.reduce((acc, cur) => (acc += cur % 2 === 1 ? cur : 0));
  }
}

// n이 짝수일 때, 등차수열의 합 공식
// n이 홀수일 때, 거듭제곱의 합 공식
function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
}
