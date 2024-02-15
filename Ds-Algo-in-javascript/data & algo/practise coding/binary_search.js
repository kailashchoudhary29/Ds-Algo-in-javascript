console.log("binary search in javascript");

const binary_search = (a, size, key) => {
  let start = 0;
  let end = size - 1;

  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (a[mid] == key) {
      return mid;
    }

    //greater--right
    else if (key > a[mid]) {
      start = mid + 1;
    }
    //lesss then --left
    else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return -1;
};

const array_search = [2, 4, 6, 8, 12, 18];

const output = binary_search(array_search, 6, 12);
console.log(output + " bs---key=search elemenets");
