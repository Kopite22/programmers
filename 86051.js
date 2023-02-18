numbers = [5, 8, 4, 0, 6, 7, 9];

function solution(numbers) {
  sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return 45 - sum;
}

console.log(solution(numbers));

// function solution(numbers) {
//     return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }
