function mapCharAndSum(N,K,str) {
    // Write code here
    if(N<0|| typeof N !== "number"){
        console.log("Wrong Input");
    }

    var alphabetMap = {};
    for (let i = 0; i < 26; i++) {
    var char = String.fromCharCode(97 + i); 
    alphabetMap[char] = N + i; 
    }
    
    let sum = 0;
    for (var char1 of str) {
    var charLower = char1.toLowerCase();
        if (alphabetMap[charLower]) {
          sum += alphabetMap[charLower];
        } else {
          console.warn(`Ignoring non-lowercase character: ${char}`);
        }
    }

  console.log(sum);

}
