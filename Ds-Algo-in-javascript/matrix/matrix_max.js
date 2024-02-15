function findMaximum(matrix) {
    let max = Number.NEGATIVE_INFINITY; // Initialize max with the smallest possible value
  
    // Iterate over each row
    console.log(matrix.length)
    for (let row = 0; row < matrix.length; row++) {
      // Iterate over each column
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] > max) {
          max = matrix[row][col]; // Update max if a larger value is found
        }
      }
    }
  
    return max;
  }
  
  // Example usage
  const matrix = [
    [4, 5, 2],
    [9, 1, 8],
    [3, 6, 7]
  ];
  
  const maxElement = findMaximum(matrix);
  console.log("Maximum element:", maxElement);