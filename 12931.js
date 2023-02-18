let n = 123;

function solution(n) {
  var answer = 0;
  let num = n.toString().split("");
  for (i = 0; i < num.length; i++) {
    answer += parseInt(num[i]);
  }
  return answer;
}

console.log(solution(n));

// function solution(n){
//     // 쉬운방법
//     return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
// }
