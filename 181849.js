const solution = (num_str) =>
  [...num_str].reduce((acc, cur) => (acc += Number(cur)), 0);
