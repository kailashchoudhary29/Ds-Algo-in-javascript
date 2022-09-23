console.log("segragate the code");

const segragate = (array) => {
  if (array.length <= 1) {
    return;
  }
  let left
  let right;
  left = 0;
  right = array.length - 1;
  while (left < right) {
    while (array[left] % 2 == 0 && left < right) {
      left++;
    }

    while (array[right] % 2 == 1 && left < right) {
      right--;
    }

    if (left < right) {
      let temp;
      temp = array[left];
      array[left] = array[right];
      array[right] = temp;
// array[left] =0;
// array[right] = 1;
      left++;
      right--;
    }
  }
  return array
};

console.log(segragate([0, 1, 0, 1, 0, 0, 1, 1, 1, 0] ));
