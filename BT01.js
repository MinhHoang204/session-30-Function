function isSymmetric(){
    for (let i = 0; i < n / 2; i++) {
        if (arr[i] != arr[n - i - 1]) {
            return false;
        }
    }
    return true;
    
}

let n = 5;
let arr = [n];
console.log("Mang ngau nhien: [");

for (let i = 0; i < n; i++){
    arr[i] = rand() % 10;
    console.log(a[i]);
    if (i != n - 1) {
        console.log(",");
    }
}

if (isSymmetric(arr, n)) {
    console.log("Mang doi xung");
} else {
    console.log("Mang khong doi xung");
}