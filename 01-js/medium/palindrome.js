/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let revStr = "";

  for (let i = str.length-1; i >= 0; i--) {
    revStr = revStr + str[i]
  }

  let string = str.toLowerCase().replace(/[^\w]|_/g, "");
  let reverseString = revStr.toLowerCase().replace(/[^\w]|_/g, "");

  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
