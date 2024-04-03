const solution = (n) => {
  // 자기 자신은 이미 충족하니까 +1
  let answer = 1;
  for (let i = 1; i <= n / 2; i++) {
    let sum = 0;
    let cnt = i;
    while (sum < n) {
      sum += cnt;
      cnt++;
    }

    if (sum === n) {
      answer += 1;
    }
  }
  return answer;
};

// 주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수는
//주어진 수의 홀수 약수의 개수와 같다라는 정수론 정리가 있다.

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }
  return answer;
}
