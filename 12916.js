function solution(s) {
  let word = s.toLowerCase();
  let p = 0;
  let y = 0;
  for (i = 0; i < word.length; i++) {
    if (word[i] === "p") {
      p += 1;
    } else if (word[i] === "y") {
      y += 1;
    }
  }
  return p == y ? true : false;
}
