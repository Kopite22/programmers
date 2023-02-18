function solution(num) {
  for (i = 0; i < 500; i++){
    if (num == 1) {
      return i
    } else {
      if (num % 2 == 0) {
        num = num/2
      } else {
        num = num*3+1
      }
    }
  }
  return -1
}

// function collatz(num) {
//   var answer = 0;
//   while (num != 1 && answer != 500) {
//     num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
//     answer++;
//   }
//   return num == 1 ? answer : -1;
// }