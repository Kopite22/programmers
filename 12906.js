const solution = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result[result.length - 1] !== arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
};

const optimizedSolution = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const lastElement = result[result.length - 1];
    if (lastElement !== arr[i]) {
      result.push(arr[i]);
    }
  }
  return result;
};

const anotherSolution = (arr) =>
  arr.filter((val, index) => val !== arr[index + 1]);
