/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (!numbers.length == 0) {
        let maxValue = -Infinity;
        for (let i = 0; i < numbers.length; i++) {
            if(numbers[i] > maxValue) {
                maxValue = numbers[i];
            }
        }
        return maxValue;
    } else {
        return undefined;
    }
}

module.exports = findLargestElement;