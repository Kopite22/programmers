function solution(lottos, win_nums) {
  let count = 0;
  let answer = [];
  let grade = [6, 6, 5, 4, 3, 2, 1];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (lottos[i] == win_nums[j]) {
        count += 1;
      }
    }
    if (lottos[i] === 0) {
      count += 1;
    }
  }
  answer.push(grade[count]);

  count = 0;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (lottos[i] == win_nums[j]) {
        count += 1;
      }
    }
  }
  answer.push(grade[count]);
  return answer;
}

// 다른 사람의 풀이
// function solution(lottos, win_nums) {
//   const rank = [6, 6, 5, 4, 3, 2, 1];

//   let minCount = lottos.filter((v) => win_nums.includes(v)).length;
//   let zeroCount = lottos.filter((v) => !v).length; 
// // !0이 true임을 이용

//   const maxCount = minCount + zeroCount;

//   return [rank[maxCount], rank[minCount]];
// }
