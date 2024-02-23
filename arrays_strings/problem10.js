function printCharReverse(N,str) {
    //write code here
    let str2 ='';
    for(var i =N-1; i>=0; i--){
        str2+= str[i];
    }
    for(var i =0; i<N; i++){
        console.log(str2[i]);
    }
    
}
