function twoSumsOneNumberII(one, two, three, four, five) {
    // Write code here
    var sum1 = one + two;
    var sum2 = three + four;
    
    if (sum1 > five || sum2 > five){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}
