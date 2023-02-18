function solution(s) {
  var desc = s.split("");
  let a = desc.length % 2;
  let b = desc.length / 2;
  var answer = "";
  if (a == 0) {
    answer += desc[b - 1];
    answer += desc[b];
    return answer;
  } else {
    answer += desc[Math.floor(b)];
    return answer;
  }
}

// Math.ceil() : 소수점 올림, 정수 반환
// Math.floor() : 소수점 버림, 정수 반환
// Math.round() : 소수점 반올림, 정수 반환
