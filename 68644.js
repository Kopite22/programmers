function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.length != 1) {
      for (let j = 0; j < numbers.length - 1; i++) {
        answer.push(numbers[0] + numbers[j + 1]);
      }
    }
    numbers.shift();
  }
  return answer;
}

function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return answer.sort((a, b) => a - b).filter((cur, i) => cur != answer[i + 1]);
}


