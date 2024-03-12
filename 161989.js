function solution(n, m, section) {
  let answer = 0;

  let arr = new Array(n).fill(true);

  section.forEach((v, i) => {
    arr[v - 1] = false;
  });

  section.forEach((v, i) => {
    if (arr[v - 1] == false) {
      for (let i = 0; i < m; i++) {
        arr[v - 1 + i] = true;
      }
      answer += 1;
    }
  });

  return answer;
}

function solution(n, m, sections) {
  let answer = 0;
  let painted = 0;
  for (let section of sections) {
    if (painted < section) {
      answer++;

      // 칠해지지 않은 섹션부터 칠하기 시작하므로
      // 예를 들어 2부터 4칸을 칠하면 5까지 칠해지니까
      // 5 이하의 숫자에서는 answer++ 할 필요가 없다
      painted = section + m - 1;
    }
  }
  return answer;
}
