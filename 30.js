function solution(num) {
  var a = parseInt(num);
  var answer = "";
  if (a % 2 == 0) {
    answer += "Even";
    return answer;
  } else {
    answer += "Odd";
    return answer;
  }
}

console.log(solution(5));
