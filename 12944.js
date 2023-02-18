function solution(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

arr = [5, 5];
console.log(solution(arr));

// function average(array){
//   return array.reduce((a, b) => a + b) / array.length;
// }
