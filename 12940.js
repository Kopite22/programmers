function solution(n, m) {
  function gcd(a, b) {
    // 유클리드 호제법
    let r = b % a;
    // 재귀
    return r === 0 ? a : gcd(r, a);
  }
  // 두 수 의 곱은 최소공배수와 최대공약수의 곱과 같다
  return [gcd(n, m), (n * m) / gcd(n, m)];
}

function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
