//Worst case - it's running time is O(n^2)
// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var min = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(array, i, min);
    }
  }
  return array;
}

var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8,54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(selectionSort(array)); 