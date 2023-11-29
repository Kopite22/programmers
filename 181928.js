function solution(num_list) {
  const even = num_list.map((v) => (v % 2 === 0 ? v : ""));
  const odd = num_list.map((v) => (v % 2 !== 0 ? v : ""));
  return Number(even.join("")) + Number(odd.join(""));
}
