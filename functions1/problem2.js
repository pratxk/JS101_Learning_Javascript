function calcDiff(a,b){
  var diff= a-b;
  return diff;
}

function calcAbsolutediff(x){
  var x1;
  if(x<=0){
     x1 = -(x);
  }
  else{
     x1= x;
  }

  return x1;
}

var a = calcDiff(12,3);

var b = calcAbsolutediff(a);

console.log(b);

