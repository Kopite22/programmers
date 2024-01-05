function solution(list, n) {
  const result = [];
  for (let i = 0; i < list.length; i += n) {
    result.push(list[i]);
  }
  return result;
}
const solution = (num_list, n) => num_list.filter((_, i) => !(i % n));