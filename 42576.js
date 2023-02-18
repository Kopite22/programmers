const p = ["mislav", "stanko", "mislav", "ana"];
const c = ["stanko", "ana", "mislav"];

function solution(p, c) {
  p.sort();
  c.sort();

  for (let i = 0; i < p.length; i++) {
    if (p[i] !== c[i]) {
      return p[i];
    }
  }
}

console.log(solution(p, c));

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}
