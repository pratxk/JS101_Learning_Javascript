function nestedReversePattern(num) {
    // Write code here
    for(j=1;j<=num;j++){
        var loop="";
        for(i=num; i>=1;i--){
            loop += i + " ";
        }
        console.log(loop);
    }
}

