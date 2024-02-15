function uniqueOccurrences(arr) {
    const counts = {};
    
    for (let element of arr) {
      if (counts[element]) {
        console.log(counts[element])
        counts[element]++;
        console.log(counts[element])
      } else {
        counts[element] = 1;
      }
    }
    console.log(counts+"::::")
    const occurrences = Object.values(counts);
    console.log(occurrences)
    const uniqueOccurrences = new Set(occurrences);
    
    return uniqueOccurrences.size === occurrences.length;
  }
  
  const array = [-3,0,1,1,1,1,-3,10,0]
  const result = uniqueOccurrences(array);
  
  console.log(result);