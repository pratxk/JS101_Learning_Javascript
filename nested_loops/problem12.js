function patternPrintingII(N) {
    // Write code here
    for(i=1;i<=N;i++){
        var bag= "";
        for(j=1;j<=N;j++){
            if(i==N)
            {
              bag = bag + "*"+" ";
            }
            else{
                if(j==1 || j==N){
                    bag= bag+"*"+" ";
                }
                else{
                    bag= bag+" "+" ";
                }
            }
        
        }
        console.log(bag);
    }
}
