//에라토스테네스의 체
function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i * i <= n; i++) {
    // 주어진 수의 제곱근까지만 계산해서 불필요한 반복을 최소화한다.
    // arr[i] 가 소수일 경우, 반복문을 진행한다.
    // 맨 처음 시작하는 2는 소수이므로,
      // 2를 제외한 2의 제곱부터, 제곱 값만 체크하여 지워나간다.
      // 제곱근까지 반복한다.
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr.filter((e) => e).length;
}
