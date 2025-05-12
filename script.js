function firstNonRepetedChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null; // if no non-repeated character
}

let str = 'aabbcdd';
let result = firstNonRepetedChar(str);
console.log(result); // Output: 'c'
