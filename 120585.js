const arr = [149, 180, 192, 170];
const height = 167;

function solution(arr, height) {
  let order = 0;

  arr.forEach((e) => {
    if (height < e) {
      order++;
    }
  });

  return order;
}

console.log(solution(arr, height));


function solution(array, height) {
  return array.filter((el) => {
    return el > height;
  }).length;
}