function identifyPrime(num) {
    // Write code here
    if(num<=1){
        console.log("No");
    }
    else{
        for(i =2; i*i<=num; i++){
        if(num%i===0){
            console.log("No");
            return;
        }
      }
    console.log("Yes");
    }
}

