console.log("Equilibrium Problem");

const equilibrium = (array) => {
  if (array.length == 0) return -1;

  let sum=0
   let sum_so_far = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  for (let i = 0; i < array.length; i++) {
    sum = sum - array[i];
    if (sum == sum_so_far) 
      return i;
    

    sum_so_far = sum_so_far + array[i];
  }


};

console.log(equilibrium([1, 6, 7, 0, 7]));
