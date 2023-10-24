function solution(n) {
  const arr = String(n).split("");
  const answer = arr.reduce((acc, cur) => Number(acc) + Number(cur), 0);
  return answer;
}
