let s = "10303";

function solution(s) {
  let numString = s.split("");
  let num = "";
  let answer = [];
  let string = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < numString.length; i++) {
    num += String(numString[i]);

    if (parseInt(numString[i]) || parseInt(numString[i]) === 0) {
      num = num.replace(numString[i], "");
      answer.push(numString[i]);
    }
    for (let j = 0; j < string.length; j++) {
      if (num === string[j]) {
        answer.push(num);
        num = num.replace(num, "");
      }
    }
  }
  for (let k = 0; k < string.length; k++) {
    for (let l = 0; l < answer.length; l++) {
      if (string[k] === answer[l]) {
        answer[l] = number[k];
      }
    }
  }
  return parseInt(answer.join(""));
}
console.log(solution(s));

//다른 사람의 풀이
// function solution(s) {
//   let numbers = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   var answer = s;

//   for (let i = 0; i < numbers.length; i++) {
//     let arr = answer.split(numbers[i]);
//     answer = arr.join(i);
//   }

//   return Number(answer);
// }
