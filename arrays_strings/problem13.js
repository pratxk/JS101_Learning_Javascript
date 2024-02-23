function checkPalindrome(N, str) {
    //write code here
    let string =str.join()
    let rStr=""
    for(let i=string.length-1;i>=0;i--){
       rStr=rStr+string[i];
    }
    if(string==rStr){
    console.log("Yes")
    }
    else{
    console.log("No")
    }
  
}
