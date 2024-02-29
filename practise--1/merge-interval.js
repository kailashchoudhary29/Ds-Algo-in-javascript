function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals)
    
    let merged = [intervals[0]];
    
    
    for (let i = 1; i < intervals.length; i++) {
        let currentInterval = intervals[i];
        console.log(currentInterval)
        let lastMerged = merged[merged.length - 1];
        console.log(lastMerged)
        
        if (currentInterval[0] <= lastMerged[1]) {
            
            lastMerged[1] = Math.max(lastMerged[1], currentInterval[1]);
           
        } else {
            merged.push(currentInterval);
        }
    }
    
    return merged;
}

// Test case
const intervals = [[1,2],[2,3] ,[3,4]];
const mergedIntervals = mergeIntervals(intervals);
console.log(mergedIntervals); //output: [[1,6], [8,10], [15,18]]
