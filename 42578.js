function solution(clothes) {
  let sum = 1;
  let count = new Map(); // 종류 별 숫자 세기 위해 카운트 객체 생성
  clothes.forEach((cloth) => {
    // 종류를 key로,
    // 처음 key가 할당되면 값은 없으므로 0으로 설정
    // 종류가 할당 되고 그 값이 있다면 해당 value 값에 +1
    count.set(cloth[1], (count.get(cloth[1]) | 0) + 1);
  });

  for (let [key, val] of count) {
    // 한 종류에서 아무것도 입지 않는 경우도 포함
    sum *= val + 1;
  }

  return sum - 1; // 모든 종류에서 입지 않는 경우인 공집합 제외 :- 1
}
solution(clothes);
