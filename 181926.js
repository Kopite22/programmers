const solution = (n, control) => {
  return [...control].reduce((acc, cur) => {
    switch (cur) {
      case "w":
        acc += 1;
        break;
      case "s":
        acc -= 1;
        break;
      case "d":
        acc += 10;
        break;
      case "a":
        acc -= 10;
    }
    return acc;
  }, n);
};

const operations = {
  w: (n) => n + 1,
  s: (n) => n - 1,
  d: (n) => n + 10,
  a: (n) => n - 10,
};

function solution(n, control) {
  return [...control].reduce((prev, op) => operations[op](prev), n);
}
