function solution(absolutes, signs) {
  let answer = 0;
  for (i = 0; i < absolutes.length; i++) {
    if (signs[i] == true) {
      answer += absolutes[i];
    } else {
      answer += absolutes[i] * -1;
    }
  }
  return answer;
}

// function solution(absolutes, signs) {
//     let answer = 0;
//     for (let i = 0; i < absolutes.length; i++) {
//         signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
//     }
//     return answer;
// }

// function solution(absolutes, signs) {
//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }

absolutes = [1, 2, 3];
signs = [false, false, true];
console.log(solution(absolutes, signs));
