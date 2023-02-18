function solution(a, b) {
  var answer = 0;
  var c = parseInt(a);
  var d = parseInt(b);
  if (c == d) {
    answer += a;
  } else {
    if (c < d) {
      for (i = c; i <= d; i++) {
        answer += i;
      }
    } else {
      for (i = d; i <= c; i++) {
        answer += i;
      }
    }
  }
  return answer;
}

console.log(solution(a, b));


function adder(a, b){
    var result = 0;
    return (a+b)*(Math.abs(b-a)+1)/2;
    양 끝의 합 * 양 끝의 합의 갯수
    가우스 공식 이용하면 쉽다... 와...