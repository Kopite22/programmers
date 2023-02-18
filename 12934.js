function solution(n) {
  for (i = 1; i <= n; i++) {
    if (n == i ** 2) {
      answer = 0;
      answer += (i + 1) ** 2;
      break;
    } else {
      answer = -1;
    }
  }
  return answer;
}

// function solution(n) {
//   var root = Math.sqrt(n);
//   var result = parseInt(root) - root === 0 ? (root + 1) * (root + 1) : -1;
//   return result;
// }
