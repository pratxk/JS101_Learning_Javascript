function masaiDivisors(left, right, k) {
    //write code here
    var num = 0;
    for(var i=left;i<=right;i++){
        if(i%k===0){
            num++;
        }
    }
    console.log(num);
}
