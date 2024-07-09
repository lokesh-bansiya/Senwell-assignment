// "Given the following set of random numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9. Store these numbers into either an object or an array. Once stored, convert them into a matrix format as shown below:

let matrix = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

function printMatrixData(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      //  console.log(matrix[j][i]);
      arr.push(matrix[j][i]);
    }
  }

  console.log({ arr });
}

printMatrixData(matrix);
