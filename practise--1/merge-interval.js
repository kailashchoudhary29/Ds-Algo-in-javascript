function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals)
    
    let merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        let lastMerged = merged[merged.length - 1];
        
        if (currentInterval[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], currentInterval[1]);
        } else {
            merged.push(currentInterval);
        }
    }
    
    return merged;
}

// Test case
const intervals = [[1,4], [2,5], [7,9]];
const mergedIntervals = mergeIntervals(intervals);
console.log(mergedIntervals); // Output: [[1,5], [7,9]]
