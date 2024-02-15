function pickToys(arr, k) {
    let n = arr.length;
    let map = new Map();
    let ans = 0, i = 0, j = 0;
    while (i < n && j < n) {
      if (map.size <= k) {
        map.set(arr[j], (map.get(arr[j]) || 0) + 1);
        j++;
      } else {
        if (map.get(arr[i]) === 1) {
          map.delete(arr[i]);
        } else {
          map.set(arr[i], map.get(arr[i]) - 1);
        }
        i++;
      }
      if (map.size <= k) {
        ans = Math.max(ans, j - i);
      }
    }
    return ans;
  }



  let arr = [1, 2, 3, 2, 2];
let k = 2;
let ans = pickToys(arr, k);
console.log(ans); // output should be 4