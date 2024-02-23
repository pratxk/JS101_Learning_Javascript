let arr = [3, 4, 5, 6, 7];
let output = "";

arr.forEach(function (element) {
  if(element%2==1){
    output += element + "-";
  }
});
output = output.slice(0,-1);
console.log(output); 