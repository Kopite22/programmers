// function solution(dot) {
//   let answer;
//   switch (dot) {
//     case dot[0] > 0 && dot[1] > 0:
//       answer = 1;
//       break;
//     case dot[0] < 0 && dot[1] > 0:
//       answer = 2;
//       break;
//     case dot[0] < 0 && dot[1] < 0:
//       answer = 3;
//       break;
//     case dot[0] > 0 && dot[1] < 0:
//       answer = 4;
//       break;
//   }
//   return answer;
// }
// 스위치 문은 변수 조건식 사용 불가
// https://dasima.xyz/javascript-switch/

function solution(dot) {
  var answer = 0;
  const x = dot[0];
  const y = dot[1];

  if (x > 0 && y > 0) answer = 1;
  if (x < 0 && y > 0) answer = 2;
  if (x < 0 && y < 0) answer = 3;
  if (x > 0 && y < 0) answer = 4;

  return answer;
}
console.log(solution([-2, 2]));

function goodSolution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

console.log(goodSolution([-2, 2]));
