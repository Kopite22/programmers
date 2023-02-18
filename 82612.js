function solution(p, m, c) {
  sum = 0;
  for (i = 1; i <= c; i++) {
    sum += i * p;
  }
  return sum - m > 0 ? sum - m : 0;
}


// function solution(price, money, count) {
//   const tmp = (price * count * (count + 1)) / 2 - money;
//   return tmp > 0 ? tmp : 0;
// }