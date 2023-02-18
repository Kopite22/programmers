function solution(n) {
  let repeat = "";
  for (let i = 0; i < n; i++) {
    i % 2 == 0 ? (repeat += "수") : (repeat += "박");
  }
  return repeat;
}

