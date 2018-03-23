/****
time complexity for radix sort is : O(d*(n+b)), d is the number of digits the array has, b is the buckets we have.
if we have a really sparse array coming from 0 to n^2, then counting sort would down to O(n^2), and also if we 
don’t know the distribution of all elements in the array, we might choose an unefficient way to do the hash part 
for bucket sort, we could still get O(n^2).

Radix is here to help us out of this trouble. The idea of Radix Sort is to do digit by digit sort starting from 
least significant digit to most significant digit. Radix sort uses counting sort as a subroutine to sort.

****/

// helper function to get the last nth digit of a number
var getDigit = function(num,nth){
  // get last nth digit of a number
  var ret = 0;
  while(nth--){
    ret = num % 10
    num = Math.floor((num - ret) / 10)
  }
  return ret
}

// radixSort
function radixSort(list){
  var max = Math.floor(Math.log10(Math.max.apply(Math,list))),  
      // get the length of digits of the max value in this array
      digitBuckets = [],
      idx = 0;

  for(var i = 0;i<max+1;i++){

    // rebuild the digit buckets according to this digit
    digitBuckets = []
    for(var j = 0;j<list.length;j++){
      var digit = getDigit(list[j],i+1);

      digitBuckets[digit] = digitBuckets[digit] || [];
      digitBuckets[digit].push(list[j]);
    }

    // rebuild the list according to this digit
    idx = 0
    for(var t = 0; t< digitBuckets.length;t++){
      if(digitBuckets[t] && digitBuckets[t].length > 0){
        for(j = 0;j<digitBuckets[t].length;j++){
          list[idx++] = digitBuckets[t][j];
        }
      }
    }
  }
  return list
}

var arr = [54, 26, 93, 17, 77, 31, 44, 55, 20];

console.log(radixSort(arr));
