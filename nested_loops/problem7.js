function patternOfN(N) {
    // Write code here
    for(row=1;row<=N;row++){
        var loop="";
        for(col=1; col<=N;col++){
            var value = (row - 1) * N + col;
            loop += value + " ";
        }
        console.log(loop);
    }
    
}
