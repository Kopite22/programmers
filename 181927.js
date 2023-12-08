const solution = (num_list) => {
  const addNum =
    num_list[num_list.length - 1] > num_list[num_list.length - 2]
      ? num_list[num_list.length - 1] - num_list[num_list.length - 2]
      : num_list[num_list.length - 1] * 2;

  return [...num_list, addNum];
};

function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}
