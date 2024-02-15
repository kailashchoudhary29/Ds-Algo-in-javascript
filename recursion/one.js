function findCombinations(ind, arr, target, ans, ds) {
    if (ind === arr.length) {
        if (target === 0) {
            ans.push([...ds]);
        }
        return;
    }

    if (arr[ind] <= target) {
        ds.push(arr[ind]);
        findCombinations(ind, arr, target - arr[ind], ans, ds);
        ds.pop();
    }
    findCombinations(ind + 1, arr, target, ans, ds);
}

function combinationSum(candidates, target) {
    let ans = [];
    findCombinations(0, candidates, target, ans, []);
    return ans;
}

const arr = [2, 3, 6, 7];
const target = 7;
const ls = combinationSum(arr, target);
console.log(combinationSum(arr, target)+" ::")
console.log("Combinations are: ");
for (let i = 0; i < ls.length; i++) {
    let currentCombination = ls[i];
    console.log(currentCombination)
   
}
