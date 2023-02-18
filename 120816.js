function solution(slice, n) {
  return n % slice === 0 ? n / slice : parseInt(n / slice) + 1;
}

function solution(slice, n) {
  return Math.ceil(n / slice);
}
