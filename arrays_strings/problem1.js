function printHorizontalArray(N,arr){
    //write code here
    var result = '';

    for (i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
        result += ' ';
      } 
    }
    console.log(result)
}
