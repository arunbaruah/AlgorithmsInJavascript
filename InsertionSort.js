//Basic sort, it's running time is O(n^2)

function InsertionSort(A) {
  for (var i = 0; i < A.length; i++) {
    let temp = A[i];
    // store the current item temp so it can be placed right
    for (var j = i - 1; j > -1 && A[j] > temp; j--) {
      // loop through the A in the sorted array (the A from the current to the beginning)
      // copy each item to the next one
      A[j + 1] = A[j];
    }
    // the last item we've reached should now hold the temp of the currently sorted item
    A[j + 1] = temp;
  }

  return A;
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(InsertionSort(list)); // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
