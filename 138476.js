const k = 6;
const t = [1, 3, 2, 5, 4, 5, 2, 3];

function solution(k, t) {
  let answer = 0;
  let obj = {};
  t.forEach((i) => {
    obj[i] = ++obj[i] || 1;
  });
  const sortObj = Object.values(obj).sort((x, y) => y - x);  let sum = 0;
  for (let num of sortObj) {
    ++answer;
    sum += num;
    if (k <= sum) {
      break;
    }
  }
  return answer;
}

console.log(solution(k, t));
