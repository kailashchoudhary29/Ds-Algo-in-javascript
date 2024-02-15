console.log("Cyclic rotation");

const cycle_rotate = (array, n) => {
  console.log(n);
  let i = 0;
  let j = n - 1;
  let temp;

  while (i != j) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
  }

  return array;
};

const array_data = [1, 2, 3, 4, 5];
const length_array = array_data.length;

console.log(cycle_rotate(array_data, length_array));
