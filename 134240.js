const food = [1, 7, 1, 2];

function solution(food) {
  const leftFoodSet = food
    .map((el, idx) => (idx !== 0 ? String(idx).repeat(Math.floor(el / 2)) : ''))
    .join('');
  return leftFoodSet
    .concat('0')
    .concat(leftFoodSet.split('').reverse().join(''));
}

console.log(solution(food));
