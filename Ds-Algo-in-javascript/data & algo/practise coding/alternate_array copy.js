console.log("alternate array");

const alternate_array = (array) => {
  let empty_array = [];
  for (let i = 1; i < array.length; i = i + 2) {
    //even =i=0;i+1 and for odd --i=1 ;i+2
    empty_array.push(array[i]);
  }
  console.log(empty_array);
};

alternate_array([1, 2, 3, 4, 5, 6]);
