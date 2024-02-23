function customSubstring(string, start, end ){
  if (!string || !string.length || start < 0 || end < 0 || start > end || end > string.length) {
    return "";
  }
  let substring = "";
  for (let i = start; i < end; i++) {
    substring += string[i];
  }
  return substring;
}

var myString = "HelloWorld!";
var substring1 = customSubstring(myString, 1, 5);
console.log(substring1);
