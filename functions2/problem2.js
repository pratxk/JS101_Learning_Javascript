function customLastIndex(array, searchElement){
  if (!array || !Array.isArray(array) || searchElement === null || searchElement === undefined) {
    return -1;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === searchElement) {
      return i; // Return the index if found
    }
  }
  return -1;
}

var array = ["Fire","Water","Air","Grass","Fire"];
var element = "Fire";
var lastIndex = customLastIndex(array,element);
console.log(lastIndex);