function solution(num_list) {
  const multiply = num_list.reduce((acc, cur) => (acc *= cur));
  const pow = Math.pow(
    num_list.reduce((acc, cur) => (acc += cur)),
    2
  );

  return multiply < pow ? 1 : 0;
}
