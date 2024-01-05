const solution = (n, k) =>
  Array.from({ length: n }, (_, i) => (!((i + 1) % k) ? i + 1 : null)).filter(
    (v, _) => v
  );

const solution = (n, k) =>
  Array(~~(n / k))
    .fill(k)
    .map((v, i) => v * (i + 1));
