// function palindrom(word) {
//     word.toLowerCase();
//     for(let i = 0; i < word.length / 2; i++) {
//         if(word[i] !== word[word.length - 1 ]) {
//             return false;
//         }
//         return true;
//     }
// }

// console.log(palindrom('aabbaabbaa'));

function palindrom(word) {
    return word.toLowerCase() === word.split('').reverse().join('').toLowerCase()
}
console.log(palindrom('aabbaaBbaa'));