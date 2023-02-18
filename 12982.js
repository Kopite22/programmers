let d = [2, 2, 3, 3];
let budget = 10;

function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  let arr = d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    sum += arr[i];
    if (budget >= sum) {
      answer += 1;
    } else {
      break;
    }
  }
  return answer;
}

solution(d, budget);
