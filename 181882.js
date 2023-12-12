function solution(arr) {
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50 && arr[i] % 2 === 0) {
      temp.push(arr[i] / 2);
    } else if (arr[i] < 50 && arr[i] % 2 === 1) {
      temp.push(arr[i] * 2);
    } else {
      temp.push(arr[i]);
    }
  }
  return temp;
}
const solution = (a) =>
  a.map((v) =>
    v >= 50 && v % 2 == 0 ? v / 2 : v < 50 && v % 2 == 1 ? v * 2 : v
  );
