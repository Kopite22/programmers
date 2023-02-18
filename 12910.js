function solution(arr, d) {
  let arr2 = []
  for (let i = 0; i<arr.length; i++){
    if (arr[i]%d == 0) {
      arr2.push(arr[i])
    }
  }
  if ( arr2.length == 0 ) {
    arr2.push(-1)
  } else {
    arr2.sort((a,b) => a - b)
  } return arr2
}
