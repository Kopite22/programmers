function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

function solution(n) {
  let answer = [];
  while (n != 0) {
    console.log(answer);
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((tot, cur, i) => tot + cur * 3 ** i, 0);
}
