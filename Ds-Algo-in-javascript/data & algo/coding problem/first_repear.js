console.log("first repeat number");

const first_repeat = (array) => {
  let s = new Set();
  let first_repeat_number = -1;

  for (let i = array.length; i >= 0; i--) {
    if (s.has(array[i])) {
      first_repeat_number = array[i];
    } else {
      s.add(array[i]);
    }

}
return first_repeat_number
};

console.log(first_repeat([2, 3, 4,  4, 3, 5, 7]));
