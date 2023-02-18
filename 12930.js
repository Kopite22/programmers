function solution(s) {
  var answer = [];
  var answer2 = [];
  let a = s.split(" ");
  for (i = 0; i < a.length; i++) {
    answer.push(
      a[i].split("").map(function (cur, j) {
        return j % 2 == 0 ? cur.toUpperCase() : cur;
      })
    );
    answer2.push(answer[i].join(""));
  }
  return answer2.join(" ");
}
