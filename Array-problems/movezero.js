// //move all zero last in array

// const moverzerolast = (arr) => {
//   let j = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       j = i;
//       break;
//     }
//   }
// //   if (j === -1) return arr;

//   for (let i = j + 1; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       let temp;
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     //   [arr[i], arr[j]] = [arr[j], arr[i]];
//       j++;
//     }
//   }
//   return arr;
// };

// const outputMoveZero = moverzerolast([1, 3, 0, 0, 5, 4, 3, 0, 8]);
// console.log(outputMoveZero.join(" "));

function moveZeros(n, a) {
  let j = -1;

  // Place the pointer j
  for (let i = 0; i < n; i++) {
    if (a[i] === 0) {
      j = i;
      break;
    }
  }

  // No non-zero elements
  if (j === -1) return a;

  // Move the pointers i and j and swap accordingly
  for (let i = j + 1; i < n; i++) {
    if (a[i] !== 0) {
      [a[i], a[j]] = [a[j], a[i]];
      j++;
    }
  }

  return a;
}

// let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let arr = [1, 3, 0, 0, 5, 4, 3, 0, 8];
let n = 10;
let ans = moveZeros(n, arr);
console.log(ans.join(" "));
