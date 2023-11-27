// 시퀀스 생성 함수

const solution = (start, end) =>
  Array.from({ length: end - start + 1 }, (v, i) => start++);
