function invertedL(N) {
    // Write code here
    for(i=1;i<=N;i++){
        var bag= "";
        for(j=1;j<=N;j++){
            if(i==1)
            {
              bag = bag + "*"+" ";
            }
            else{
                if(j==1){
                    bag= bag+"*"+" ";
                }
            }
        
        }
        console.log(bag);
    }
}
