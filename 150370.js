const a = "2020.01.01";
const b = ["Z 3", "D 5"];
const c = [
  "2019.01.01 D",
  "2019.11.15 Z",
  "2019.08.02 D",
  "2019.07.01 D",
  "2018.12.28 Z",
];

function checkValid(now, check, validNum) {
  let [nyy, nmm, ndd] = now.split(".");
  let [cyy, cmm, cdd] = check.split(".");

  return ((nyy - cyy) * 12 + (nmm - cmm)) * 28 + (ndd - cdd) >= validNum * 28;
}

function solution(today, terms, privacies) {
  let answer = [];
  let valid = {};
  for (let i = 0; i < terms.length; i++) {
    let temp = terms[i].split(" ");
    valid[temp[0]] = temp[1];
  }

  for (let i = 0; i < privacies.length; i++) {
    let temp = privacies[i].split(" ");

    if (checkValid(today, temp[0], valid[temp[1]])) answer.push(i + 1);
  }

  return answer;
}

console.log(solution(a, b, c));
