function vowelAndConsonantCount(N, str) {
    //write code here
    let count1 = 0;
    let count2 =0;
    let vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      count1++;
    }
    else{
        count2++;
    }
   }
   console.log(count1, count2);
  }
  