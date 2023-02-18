function solution(answers) {
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let winner = [];
  let rank = [];
  let answer1 = first
    .join("")
    .repeat(Math.ceil(answers.length / first.length))
    .slice(0, answers.length)
    .split("");
  let answer2 = second
    .join("")
    .repeat(Math.ceil(answers.length / first.length))
    .slice(0, answers.length)
    .split("");
  let answer3 = third
    .join("")
    .repeat(Math.ceil(answers.length / first.length))
    .slice(0, answers.length)
    .split("");

  let rank1 = answer1.filter((cur, i) => {
    return cur == answers[i];
  });
  let rank2 = answer2.filter((cur, i) => {
    return cur == answers[i];
  });
  let rank3 = answer3.filter((cur, i) => {
    return cur == answers[i];
  });
  rank.push(rank1.length, rank2.length, rank3.length);
  let idx = rank.indexOf(Math.max(...rank));

  if (rank[0] != rank[1] && rank[1] != rank[2] && rank[0] != rank[2]) {
    winner.push(idx + 1);
  } else {
    while (idx != -1) {
      winner.push(idx + 1);
      idx = rank.indexOf(Math.max(...rank), idx + 1);
    }
  }
  return winner;
}

// function solution(answers) {
//   var answer = [];
//   const man1 = [1, 2, 3, 4, 5];
//   const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
//   const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//   let count = [0, 0, 0];

//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] == man1[i % man1.length]) count[0]++;
//     if (answers[i] == man2[i % man2.length]) count[1]++;
//     if (answers[i] == man3[i % man3.length]) count[2]++;
//   }

//   const max = Math.max(count[0], count[1], count[2]);
//   for (let i = 0; i < count.length; i++) {
//     if (max == count[i]) answer.push(i + 1);
//   }

//   return answer;
// }
