let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

function solution(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1[i].length; j++) arr1[i][j] += arr2[i][j];
  }
  return arr1;
}

// function solution(arr1, arr2) {
//   answer =[]
//   test = []
//   for (let i = 0; i < arr1.length; i++) {
//    let a = arr1[i]
//    let b = arr2[i]
//     for (j = 0; j < a.length; j++) {
//       let c = a[j]
//       let d = b[j]
//       let e = c+d
//       answer.push(e)
//     } console.log(answer)
//     test.push(answer)
//   }
// }

//맵 함수 공부하자
console.log(solution(arr1, arr2));
