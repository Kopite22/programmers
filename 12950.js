const solution = (arr1, arr2) =>
  arr1.map((v, i) => v.map((val, idx) => val + arr2[i][idx]));
