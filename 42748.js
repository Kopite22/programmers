const solution = (arr, commands) =>
  commands.map(
    (v, i) => arr.slice(v[0] - 1, v[1]).sort((a, b) => a - b)[v[2] - 1],
  );
