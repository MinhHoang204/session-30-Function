let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 20;

function smallestSubarray(arr, num) {
  let minLen = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum > num) {
      return 1;
    }
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum > num && (j - i + 1) < minLen) {
        minLen = (j - i + 1);
      }
    }
  }
  return minLen;
}

console.log(smallestSubarray(arr, num));