const solution = (s) => {
  let answer = [0, 0];
  let length = 0;

  while (s.length > 1) {
    length = s.length;
    s = s.split('0').join('');
    answer[0]++;
    answer[1] += length - s.length;
    s = s.length.toString(2);
  }

  return answer;
};

function solution(s) {
  var answer = [0, 0];
  while (s.length > 1) {
    answer[0]++;
    answer[1] += (s.match(/0/g) || []).length;
    s = s.replace(/0/g, '').length.toString(2);
  }
  return answer;
}
