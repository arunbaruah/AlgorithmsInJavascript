/* Worst-case time complexity-O(n^2) if the partition is very badly done by the randomized number
and the Best case will be O(n log n)
Most discussions about sorting algorithms tend to end up discussing quicksort because of its speed. 
Formal computer science programs also tend to cover quicksort1 last because of its excellent average complexity 
of O(n log n) and relative performance improvement over other, less efficient sorting algorithms such as bubble
sort and insertion sort for large data sets. Unlike other sorting algorithms, there are many different
implementations of quicksort that lead to different performance characteristics and whether or not the sort is 
stable (with equivalent items remaining in the same order in which they naturally occurred).

Quicksort is a divide and conquer algorithm in the style of merge sort. The basic idea is to find a “pivot” item
in the array to compare all other items against, then shift items such that all of the items before the pivot are 
less than the pivot value and all the items after the pivot are greater than the pivot value. After that,
recursively perform the same operation on the items before and after the pivot.
**/

function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

var items = [4, 2, 6, 5, 3, 9,2,1];
var result = quickSort(items);
console.log(result);