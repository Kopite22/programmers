function solution(array, n) {
  let count = 0;
  array.forEach((e) => {
    if (e === n) {
      count++;
    }
  });
  return count;
}

function solution(array, n) {
  let Array = array.filter((e) => e === n);
  return Array.length;
}
