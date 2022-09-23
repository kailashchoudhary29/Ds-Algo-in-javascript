console.log("Merge sort algo");

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  console.log("mid"+mid)
  const leftArr = array.slice(0, mid);
  console.log(leftArr)
  const rightArr = array.slice(mid);
  console.log(rightArr+"--$$")
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const sortArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortArr.push(leftArr.shift());
    } else {
      sortArr.push(rightArr.shift());
    }

    return [...sortArr, ...leftArr, ...rightArr];
  }
};

const arr = [5, 20, -4, -6, 2];
console.log(mergeSort(arr));
