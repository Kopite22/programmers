const solution = (s) => {
  const arr = [];

  if (s[0] === ')') {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      arr.push(s[i]);
    } else {
      if (arr.length > 0) {
        arr.pop();
      }
    }
  }

  return arr.length ? false : true;
};

function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === '(' ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}
