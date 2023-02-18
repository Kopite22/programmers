let n = 1234;

function solution(n) {
  return parseInt(
    (n + "")
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}
console.log(solution(n));
