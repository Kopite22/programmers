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

// 스택을 사용한 방법
function solution(numbers) {
  const answer = [];
  const stack = [];

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    answer[stack.pop()] = -1;
  }

  return answer;
}

console.log(solution(arr));
