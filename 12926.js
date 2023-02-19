let n = 4;
let s = 'z';

function solution(s, n) {
  const arr = s.split('');
  return arr
    .map((el) => {
      if (el == ' ') {
        return el;
      }
      const tmp = el.charCodeAt();
      return el.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(tmp + n - 26)
        : String.fromCharCode(tmp + n);
    })
    .join('');
}

console.log(solution(s, n));
