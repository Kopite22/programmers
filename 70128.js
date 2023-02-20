// 로그인테스트

function solution(a, b) {
  return a.reduce((tot, cur, i) => (tot += a[i] * b[i]), 0);
}
