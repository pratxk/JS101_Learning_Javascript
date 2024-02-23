function customSlice(array, start = 0, end = array.length) {
  if (!array || !Array.isArray(array)) {
    return [];
  }

  if (start < 0) {
    start = array.length + start;
  }
  if (end < 0) {
    end = array.length + end;
  }

  if (start > end) {
    return []; 
  }
  const slicedArray = [];
  for (let i = start; i < end; i++) {
    slicedArray.push(array[i]);
  }

  return slicedArray;
}

const myArray = [1, 2, 3, 4, 5];
const slice1 = customSlice(myArray, 1, 4); 
const slice2 = customSlice(myArray, -2); 
const slice3 = customSlice(myArray, 2, -1); 

console.log(slice1);
console.log(slice2);
console.log(slice3);