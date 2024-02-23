function reverseArrayTraversal(n, arr){
    //write code here
    revers=[];
    
    for(i=arr.length-1; i>=0; i--){
        revers.push(arr[i]);
    }
    var result = '';
    for (i = 0; i < revers.length; i++) {
    result += revers[i];
    if (i < revers.length - 1) {
        result += ' ';
      } 
    }
    console.log(result)
}
