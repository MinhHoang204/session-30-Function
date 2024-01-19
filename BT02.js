let n = parseInt(prompt("Nhập vào số nguyên dương n: "));

function printOddNumbers(n) {
    let sum = 0;
    let count = 0;
    for (let i = 1; i <= n; i += 2) {
        console.log(i);
        sum += i;
        count++;
    }
    if (sum % 2 === 0) {
        console.log(n + 1);
        count++;
    }
    console.log(`Tổng các số được in ra là một số lẻ.`);
}

printOddNumbers(n);