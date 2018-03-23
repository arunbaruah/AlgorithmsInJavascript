// Worst case running time is O( log N)
// array must be sorted
function BinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const list = [1, 2, 5, 17, 20, 23, 44, 55, 58];
console.log(BinarySearch(list,58)); //output 8 i.e. in 8th position