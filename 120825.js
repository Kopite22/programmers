const solution = (my_string, n) =>
  my_string
    .split("")
    .map((v) => v.repeat(n))
    .join('');
