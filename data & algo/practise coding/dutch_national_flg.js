console.log("Dutch national flag problem");

const sort_array = (array) => {
  let low, mid, high;
  mid = low = 0;
  high = array.length - 1;

  while (mid <= high) {
    switch (array[mid]) {
      case 0:
        if (array[low] != array[mid]) {
          let temp = array[low];
          array[low] = array[mid];
          array[mid] = temp;
        }
        low++;
        mid++;

        break;
      case 1:
        mid++;

        break;
      case 2:
        if (array[mid] != array[high]) {
          let temp = array[mid];
          array[mid] = array[high];
          array[high] = temp;
        }
        high--;
        break;
    }
   
  }
  let new_array = []
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};


sort_array([0, 1, 1, 0, 2, 2, 1, 0, 2]);
