function solution(seoul) {
  let x = 0;
  seoul.map(function (cur, i) {
    cur === "Kim" ? (x += i) : (x += 0);
  });
  return `김서방은 ${x}에 있다`;
}
