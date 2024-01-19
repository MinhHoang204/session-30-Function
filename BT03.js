let str = prompt("Nhập vào chuỗi bất kỳ: ");

function buildArray(str) {
    let charArr = [];
    let letters = [];
    let numbers = [];
    let specials = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            letters.push(str[i]);
        } else if (str[i].match(/[0-9]/)) {
            numbers.push(str[i]);
        } else {
            specials.push(str[i]);
        }
    }

    charArr = letters.concat(numbers, specials);

    return charArr;
}

let arr = buildArray(str);
console.log(`Mảng các ký tự trong chuỗi ${str} có thứ tự: ${arr}`);