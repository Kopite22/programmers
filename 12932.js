let n = 12345;

function solution(n) {
  let arr = n.toString().split("").reverse();
  return arr.map((cur) => parseInt(cur));
}

solution(n);
