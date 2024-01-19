let str = prompt("Nhập vào chuỗi bất kỳ: ");

function capitalizeLastLetter(str) {
    let words = str.split(" ");
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let lastLetter = word.charAt(word.length - 1);
        let newWord = word.slice(0, -1) + lastLetter.toUpperCase();
        newWords.push(newWord);
    }

    return newWords.join(" ");
}

let newStr = capitalizeLastLetter(str);
console.log(`Chuỗi truyền vào nhưng các ký tự cuối cùng của mỗi từ đều được viết hoa: ${newStr}`);