let n = 4;
let s = "a B z";

function solution(s, n) {
  let answer = "";
  let arr = s
    .split("")
    .map((cur, idx) => (cur == " " ? cur : s.charCodeAt(idx) + n));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      arr[i] = " ";
    } else {
      if (s[i] === s[i].toUpperCase()) {
        91 <= arr[i]
          ? (arr[i] = String.fromCharCode(arr[i] - 26))
          : (arr[i] = String.fromCharCode(arr[i]));
      } else if (s[i] === s[i].toLowerCase()) {
        123 <= arr[i]
          ? (arr[i] = String.fromCharCode(arr[i] - 26))
          : (arr[i] = String.fromCharCode(arr[i]));
      }
    }
  }
  return arr.join("");
}

solution(s, n);
