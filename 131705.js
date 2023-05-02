const numArr = [-2, 3, 0, 2, -5];

function solution(numArr) {
  let result = 0;

  const sum = (arr, idx) => {
    if (arr.length === 3) {
      result += arr.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }
    for (let i = idx; i < Number.length; i++) {
      sum([...arr, number[i]], i + 1);
    }
  };
  sum([], 0);
  return result;
}
