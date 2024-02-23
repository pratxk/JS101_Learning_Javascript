function divisibleByKII(num,k) {
    //write code here
    var sum = 0;
    for(i =1; i<=num;i++){
        if(i%k===0){
            
            sum+=  i;
        }
            
    }
    console.log(sum);
}

