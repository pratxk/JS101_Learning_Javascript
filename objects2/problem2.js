function mapCharAgain(N) {
    // Write code here
    if(N<0|| typeof N !== "number"){
        console.log("Wrong Input");
    }
    for(i=97; i<=122;i++){
        var alphabet = String.fromCharCode(i);
        console.log(alphabet+"-"+N);
        N++;
    }
}
