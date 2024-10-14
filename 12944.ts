const answer = (arr: number[]) =>
  arr.reduce((acc, cur) => (acc += cur), 0) / arr.length;
