function solution(a, b) {
  var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`${a}/${b}/2016`);
  return week[date.getUTCDay()];
}

// function solution(a, b) {
//   let date = new Date(`${a}/${b}/2016`);

//   return date.toDateString().slice(0,3).toUpperCase()
// }
