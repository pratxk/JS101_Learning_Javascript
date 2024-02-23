function isOdd(a){
  if(a%2!==0){
    return true;
  }
  else{
    return false;
  }
}

var limit = 100;
var arr=[];
for(var i = 1; i<=limit; i++)
{
  var result = isOdd(i);
  if(result == true)
  {
    arr.push(i);
  }
}
console.log(arr);