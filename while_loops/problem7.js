function evenSumBelowN(num) {
    // Write code here
    var i =1;
    var sum = 0;
    while(i<=num){
        if(i%2===0){
            sum+= i;
        }
        i++;
    }
    console.log(sum);
}
