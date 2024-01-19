let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Các số nguyên tố trong mảng là:");
for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
        console.log(arr[i]);
    }
}