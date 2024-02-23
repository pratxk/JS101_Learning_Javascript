function yourFirstNested(num) {
    // Write code here\
    for(j=1;j<=num;j++){
        var loop="";
        for(i=1; i<=num;i++){
            loop = loop + i + " ";
        }
        console.log(loop);
    }
    
}
