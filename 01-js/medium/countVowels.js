/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count = 0;
    let charArr = str.toLowerCase().split("");

    for (let i = 0; i < charArr.length; i++) {
      if (charArr[i] === 'a' || charArr[i] === 'e' || charArr[i] === 'i' || charArr[i] === 'o' || charArr[i] === 'u') {
        count++;
      }
    }

    return count;
}

module.exports = countVowels;