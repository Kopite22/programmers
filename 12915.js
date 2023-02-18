function solution(strings, n) {
  let answer = [];
  let strings2 = [];

  for (let i = 0; i < strings.length; i++) {
    strings2.push(strings[i][n] + strings[i]);
  }
  strings2.sort();
  for (let j = 0; j < strings2.length; j++) {
    answer.push(strings2[j].slice(1));
  }
  return answer;
}

다른 사람의 풀이
function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
