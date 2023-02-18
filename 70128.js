function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

// function solution(a, b) {
//   return a.reduce((tot, cur, i) => (tot += a[i] * b[i]), 0);
// }
