function customIncludes(array, searchElement){
  if (!array || !Array.isArray(array) || searchElement === null || searchElement === undefined) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return true;
    }
  }
  return false;
}
var myArray = [1, 2, 3, 4, 5];
var element = 5;
var isIncluded = customIncludes(myArray, element);
console.log(isIncluded);