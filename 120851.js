function solution(my_string) {
  const numArr = my_string.replaceAll(/[a-z]/gi, "").split("");
  return numArr.reduce((acc, cur) => Number(acc) + Number(cur), 0);
}
