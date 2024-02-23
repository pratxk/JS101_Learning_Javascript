let arr = [10, 24, 56, 72, -10, -88, 100, 564];
var box=[];
arr.forEach(function(elem,index){
  if(index%2==1){
    box.push(elem);
  }
});
console.log(box);
let sum = box.reduce(function(acc,curr){
  return acc+curr;
},0);
console.log("Sum is "+sum);
console.log("average is "+sum/box.length);