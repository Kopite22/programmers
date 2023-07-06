const arr = [2, 3, 3, 5];

function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i + 1 === numbers.length) {
      answer.push(-1);
      break;
    }
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        answer.push(numbers[j]);
        break;
      } else if (j === numbers.length - 1) {
        answer.push(-1);
      }
    }
  }

  return answer;
}

console.log(solution(arr));
