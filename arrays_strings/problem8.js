function maximumInArray(N,arr){
    //write code here
    let max = arr[0];
    for(var i=0;  i<N; i++){
        if(arr[i]>max){
            max  = arr[i];
        }
    }
    console.log(max);
}
