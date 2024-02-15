console.log("given sum array");

const sum_array = (array, sum) => {
  if (array.length == 0) {
    return false;
  }
  let s = new Set();
  for (let i = 0; i < array.length; ++i) {
    let temp = sum - array[i];
    // console.log(temp);

    // checking for condition
    if (s.has(temp)) {
      console.log(
        "Pair with given sum " + sum + " is (" + array[i] + ", " + temp + ")"
      );
    }
    s.add(array[i]);
  }
};

sum_array([7, 9, 45, 6, 10, 8], 16);
