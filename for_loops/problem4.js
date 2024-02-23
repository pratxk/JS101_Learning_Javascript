function sumOfMultiples(n,k,y) {
    //write code here0.
    var sum = 0;

  
  for (i = 1; i <= k; i++) {
   
    const multiple = i * n;

    // Check if the multiple is divisible by Y
    if (multiple % y === 0) {
      sum += multiple;
    }
  }

  console.log( sum);
}
