function solution(s) {
  const len = s.length;

  if (len === 4 || len === 6) {
    return s.split("").every((c) => !isNaN(c));
  }
  return false;
}


// function solution(s) {
//   if (!(s.length == 4 || s.length == 6)) {
//     return false;
//   } else {
//     const tmp = s.split("");
//     for (let i = 0; i < tmp.length; i++) {
//       if (isNaN(tmp[i])) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function solution(s) {
//   let result = parseInt(s);
//   if ((s.length === 4 || s.length === 6) && s == result) {
//     result = true;
//   } else {
//     result = false;
//   }
//   return result;
// }