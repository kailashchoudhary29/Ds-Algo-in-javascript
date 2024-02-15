const a = [1, 2, 3, 3, 3, 3, 4, 4, 5];
const output = [a[0]];

for (let i = 1; i < a.length; i++) {
  if (a[i] !== a[i - 1]) {
    output.push(a[i]);
  }
}

console.log(output);