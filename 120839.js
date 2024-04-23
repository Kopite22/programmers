const solution = (rsp) =>
  rsp.replace(/0|5|2/g, function (match) {
    switch (match) {
      case '0':
        return '5';
      case '5':
        return '2';
      case '2':
        return '0';
      default:
        return match;
    }
  });

function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join('');
  return answer;
}
