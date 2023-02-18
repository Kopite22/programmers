const left = 13;
const right = 17;

function getCountArr(num) {
  const arr = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      arr.push(i);
      if (num / i != i) arr.push(num / i);
    }
  }
  return arr.length;
}

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    getCountArr(i) % 2 === 0 ? (result += i) : (result -= i);
  }
  return result;
}

// 다른 사람의 풀이
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
