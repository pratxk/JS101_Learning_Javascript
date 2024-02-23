function oddArraySum(n, arr){
    //write code here
    let sum = 0;
    for(let i=0; i<n;i++){
        if(arr[i]%2!==0){
            sum+=arr[i] ;
        }
    }
    console.log(sum);
}
