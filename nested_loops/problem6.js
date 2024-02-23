function patternPrinting(N) {
    // Write code here
    for(j=1;j<=N;j++){
        var loop="";
        for(i=1; i<=j;i++){
            loop = loop + "*";
        }
        console.log(loop);
    }
}
