let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 20;

function findTriplets(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === num) {
                    result.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return result;
}

console.log(findTriplets(arr, num));