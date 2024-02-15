/*Input: hval[] = {6, 7, 1, 3, 8, 2, 4}
Output: 19

Explanation: The thief will steal 6, 1, 8 and 4 from the house.

Input: hval[] = {5, 3, 4, 11, 2}
Output: 16

Explanation: Thief will steal 5 and 11

*/

const stickler_max = (array, n) => {
  if (n < 0) return 0;

  if (n < 2) {
    return Math.max(array[0], array[1]);
  }

  //  // if current element is pick then previous cannot be
  // // picked
  // let pick = array[n] + stickler_max(array, n - 2);
  // // if current element is not picked then previous
  // // element is picked
  // let notPick = stickler_max(array, n - 1);

  // // return max of picked and not picked
  // console.log(pick,notPick)
  // return Math.max(pick, notPick);

  let new_array = new Array(n);

  new_array[0] = array[0];

  new_array[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < n; i++) {
    new_array[i] = Math.max(new_array[i - 2] + array[i], new_array[i - 1]);
    console.log(new_array);
  }
  console.log(new_array[n - 1]);
  return new_array[n - 1];
};

let house_array = [6, 7, 1, 3, 8, 2, 4];
// 6 7 1 3   8  2   4==array
// 6 7 7 10 15  15 19==new
//new_array[i-2]+array[i],new_array[i-1]
let house_length = house_array.length;

stickler_max(house_array, house_length);
