const solution = (arr1, arr2) => {
  const isLength = arr1.length === arr2.length;
  const sum1 = arr1.reduce((acc, cur, _) => (acc += cur), 0);
  const sum2 = arr2.reduce((acc, cur, _) => (acc += cur), 0);

  if ((isLength && sum1 > sum2) || arr1.length > arr2.length) return 1;
  if ((isLength && sum1 < sum2) || arr1.length < arr2.length) return -1;
  if (isLength && sum1 === sum2) return 0;
};
