const rotateMatrix90 = (matrix) => {
    const n = matrix.length;
    
    // Transpose the matrix
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        // Swap matrix[i][j] with matrix[j][i]
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    
    // Reverse each row to rotate 90 degrees
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n / 2; j++) {
        // Swap matrix[i][j] with matrix[i][n - 1 - j]
        console.log(n)
        console.log(matrix[i][n - 1 - j])
       

        [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
      }
    }
    
    
    return matrix;
  };
  
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(rotateMatrix90(matrix));

  