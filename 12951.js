const str = '3people unFollowed me';

function solution(string) {
  return string
    .split(' ')
    .map((el, idx) =>
      el ? el[0].toUpperCase() + el.toLowerCase().slice(1) : ''
    )
    .join(' ');
}
