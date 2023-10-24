function solution(my_string) {
  const vowel = ["a", "e", "i", "o", "u"];
  return [...my_string].map((v) => (!vowel.includes(v) ? v : "")).join("");
}

function solution2(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}
