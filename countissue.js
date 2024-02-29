const printloop = (array) => {
  let result = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !result.includes(array[i])) {
        result.push(array[i]);
        count++;
      }
    }
  }
  if (result.length > 0) {
    console.log(count);
    console.log(result);
    return true;
  } else {
    return false;
  }
};

const outputarray = printloop([1, 1, 1, 3, 3, 4, 3, 2, 4, 2, 5, 8]);
console.log(outputarray);
