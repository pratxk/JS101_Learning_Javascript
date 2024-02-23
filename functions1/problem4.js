function calculateAverage(array) {
  if (!array || array.length === 0) {
    console.log("Error: Empty array provided");
    return;
  }

  var sum = 0;
  for ( i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let average = sum / array.length;
  return average;
}

// Example usage
let myArray = [1, 2, 3, 5];
let average = calculateAverage(myArray);

if (average !== undefined) {
  console.log("The average of the array is:", average);
}