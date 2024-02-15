console.log("fibbonaci series");

const fibo_number = (n) => {
  if (n < 2) {
    return n;
  }
  return fibo_number(n - 2) + fibo_number(n - 1);
};

let fibnumber = 2;
for (let i = 0; i <= fibnumber; i++) {
  console.log(fibo_number(i));
}



