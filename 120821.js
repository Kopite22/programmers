const solution = (num_list) => num_list.reverse();

function solution(numArr) {
  let answer = [];
  for (let i = numArr.length - 1; i >= 0; i--) {
    answer = [...answer, numArr[i]];
  }

  return answer;
}
