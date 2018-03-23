// Worst case running time is O(N)

function linearSearch(array, toFind){
  for(let i = 0; i < array.length; i++){
    if(array[i] === toFind) return i;
  }
  return -1;
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(linearSearch(list,31)); //output 5 ie found in 6th position (0,1,2,3,4,5)