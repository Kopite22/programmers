const solution = (s1, s2) => s1.filter((v) => s2.includes(v)).length;

function solution2(s1, s2) {
  const concat = [...s1, ...s2];
  const setConcat = Array.from(new Set(concat));

  return concat.length - setConcat.length;
}
