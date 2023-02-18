function solution(s) {
  let arr = s.split("").map((cur) => cur.charCodeAt());
  let answer = [];
  arr = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    answer.push(String.fromCharCode(arr[i]));
  }
  return answer.join("");
}
console.log(solution(s));

// 다른 사람의 풀이
// function solution(s) {
//   return s
//     .split("")
//     .sort()
//     .reverse()
//     .join("");
// }
