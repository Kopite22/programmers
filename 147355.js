let t = '3141592';
let p = '271';

// function solution(t, p) {
//   const list = [...t].map((cur, idx) => {
//     const num = t.substr(idx, p.length);
//     if (num.length === p.length && Number(num) <= Number(p)) {
//       return num;
//     }
//   });

//   return list.filter((item) => !!item).length;
// }

function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}
