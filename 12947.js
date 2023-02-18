function solution(x) {
  let num = (x + "").split("");
  let sum = num.reduce(function (tot, cur) {
    return tot + parseInt(cur);
  }, 0);
  return x % sum == 0;
}
