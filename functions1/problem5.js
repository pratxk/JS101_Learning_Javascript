function lowerConversion(str){
  if (!str || str.length === 0) {
    console.log("Error: Empty array provided");
    return;
  }
  else{
    var x = str.toString();
    var y = x.toLowerCase();
    return y;
  }
}

var myStr = ["MA","SA", "I", "SCH", "OOL"];
var lestry =  lowerConversion(myStr);

console.log(lestry);