const nums = [3, 1, 2, 3];

function solution(nums) {
  const maxSelect = nums.length / 2;
  const set = new Set(nums);

  const newArr = [...set];

  return Math.floor(maxSelect) > newArr.length
    ? newArr.length
    : Math.floor(maxSelect);
  // if (Math.floor(maxSelect) > newArr.length) {
  //   return newArr.length;
  // } else if (Math.floor(maxSelect) <= newArr.length) {
  //   return Math.floor(maxSelect);
  // }
}

// 다른 풀이

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

// set.size 속성 알아보기
