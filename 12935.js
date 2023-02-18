let arr = [1,2,3,4,5];

function solution(arr) {
  let num = arr.reduce(function (tot, cur) {
    return tot < cur ? tot : cur;
  });
  return arr.length != 1 ? arr.filter((x) => x != num) : [-1];
}
// function solution(arr) {
//     arr.splice(arr.indexOf(Math.min(...arr)),1);
//     if(arr.length<1)return[-1];
//     return arr;
// }

console.log(solution(arr));
