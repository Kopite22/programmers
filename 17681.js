n = 5;
arr1 = [9, 20, 28, 18, 11];
arr2 = [30, 1, 21, 17, 28];

function solution(n, arr1, arr2) {
  const newArr1 = arr1.map((v, i) => v.toString(2).padStart(n, 0));
  const newArr2 = arr2.map((v, i) => v.toString(2).padStart(n, 0));
  const answer = [];
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let z = 0; z < n; z++) {
      let sum = Number(newArr1[i][z]) + Number(newArr2[i][z]);
      if (sum === 1 || sum === 2) {
        str += "#";
      } else {
        str += " ";
      }
    }
    answer.push(str);
  }
  return answer;
}

const other = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );
