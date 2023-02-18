let id = "abcdefghijklmn.p";

function solution(id) {
  id = id.toLowerCase();
  id = id.replace(/[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi, "");
  id = id.replace(/\.+/g, ".");
  id = id.replace(/^\.|\.$/g, "");

  if (id === "") {
    id += "a";
  }
  if (16 <= id.length) {
    id = id.slice(0, 16);
    id = id.replace(/.$/i, "");
  }

  if (id.length <= 2) {
    while (true) {
      id = id.concat(id[id.length - 1]);
      if (id.length == 3) break;
    }
  }
  id = id.replace(/^\.|\.$/g, "");
  return id;
}
console.log(solution(id));


// 다른 사람의 풀이
// function solution(new_id) {
//     const answer = new_id
//         .toLowerCase() // 1
//         .replace(/[^\w-_.]/g, '') // 2
//         .replace(/\.+/g, '.') // 3
//         .replace(/^\.|\.$/g, '') // 4
//         .replace(/^$/, 'a') // 5
//         .slice(0, 15).replace(/\.$/, ''); // 6
//     const len = answer.length;
//     return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }