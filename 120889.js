const sides = [199, 72, 222];

function solution(sides) {
  const newArr = sides.sort((a, b) => a - b);
  return newArr[0] + newArr[1] > newArr[2] ? 1 : 2;
}

console.log(solution(sides));
