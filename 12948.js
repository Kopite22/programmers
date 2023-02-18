function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 찾아보니까 substr은 옛날 함수라 쓰지말라고하고, substring 하고 slice가 남아있는데 slice 가 '음수' 지원 (위의 답처럼)이 되므로 slice를 쓰는 것을 추천한다는 글이 있네요. 다른 분들께 도움이 되시라고 적어놓습니다~ 슬라이스씁시다!

// function hide_numbers(s) {
//   return s.replace(/\d(?=\d{4})/g, "*");
// }
// 정규식이라는 것도 있다
console.log(solution("01033334444"));
