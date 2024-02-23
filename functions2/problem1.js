function customJoin(array, separator=","){
  if (!array || !Array.isArray(array) || separator === null || separator === undefined) {
    return "";
  }
  let resultString="";
  for(let i=0;i<array.length;i++){
    var element = array[i];
    var stringElement = String(element);
    if (i > 0) {
      resultString += separator;
    }
     resultString += stringElement;
  }
  return resultString;
}

var myArray = ["Fire","Water","Air"];
var joinedString = customJoin(myArray,"+");
console.log(joinedString);