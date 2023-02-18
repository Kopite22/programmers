const arr = [1, 2, 3, 4, 5];

function solution(num_list) {
  let odd = 0;
  let even = 0;

  num_list.map((num) => {
    if (num % 2) {
      odd++;
    } else {
      even++;
    }
  });
  return [even, odd];
}

console.log(solution(arr));

// 이렇게 생각하자

function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}