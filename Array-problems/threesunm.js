//three sum code

const threeSum = (arr) => {
  const triplet = [];

  const y = arr.sort((a, b) => a - b);
  console.log(y);
  //[ -4, -1, -1, 0, 1, 2 ]

  let N = arr.length;
  for (let i = 0; i < N; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    let j = i + 1;
    let k = N - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        triplet.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;

        while (j < k && arr[j] === arr[j + 1]) j++;
        while (j < k && arr[k] === arr[k + 1]) k--;
      }
    }
  }
  return triplet;
};

const outputArray = threeSum([-1, 0, 1, 2, -1, -4]);

for (const tripletnum of outputArray) {
  console.log(tripletnum);
}
