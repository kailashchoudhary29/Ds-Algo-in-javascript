const stockMaxProfit = (array) => {
  let maxprofit = 0;
  let N = array.length;
  let mini = array[0];

  for (let i = 1; i < N; i++) {
    let cost = array[i] - mini;

    maxprofit = Math.max(maxprofit, cost);

    mini = Math.min(mini, array[i]);
  }

  return maxprofit;
};

const outputstockProfit = stockMaxProfit([7, 1, 5, 3, 6, 4]);
console.log(outputstockProfit);
