const solution = (my_string, alp) =>
  [...my_string].reduce(
    (acc, cur) => (acc += cur === alp ? cur.toUpperCase() : cur),
    ""
  );
const solution = (s, a) => s.replaceAll(a, a.toUpperCase());
