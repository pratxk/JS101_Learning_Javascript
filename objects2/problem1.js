function mapChar(N) {
    // Write code here
    if(N>26 || N<0){
        console.log("Wrong Input");
        return;
    }
    for(i=1; i<=N;i++){
        var alphabet = String.fromCharCode(97+i-1);
        console.log(alphabet+"-"+i);
    }
    
}
