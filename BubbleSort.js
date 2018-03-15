//Worst case - it's running time is O(n^2)
// swap function helper

function BubbleSort(items) {
  console.log(items)
  var length = items.length;
  for (var i = (length - 1); i >= 0; i--) {
    //Number of passes
    for (var j = (length - i); j > 0; j--) {
      //Compare the adjacent positions
      if (items[j] < items[j - 1]) {
        //Swap the numbers
        var tmp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = tmp;
      }
    }
  }
  return items;
}
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8,54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(BubbleSort(array)); 