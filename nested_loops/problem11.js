function patternPrintingI(N) {
    // Write code here
    for(i=1;i<=N;i++){
        var pattern= "";
        if(i==1 || i===N){
           for(j=1;j<=N;j++){
                pattern+= "*" + " ";
           }
        }
        else{
               pattern+= "*"+" ";
        }
        console.log(pattern);
    }
}
