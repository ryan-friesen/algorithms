/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */

function reverseWordOrder(wordsStr) {
  const stringArr = wordsStr.split(" ");
  let reversedArr = [];
  for (i = stringArr.length; i > 0; i--) {
    reversedArr.push(stringArr[i - 1]);
  }
  return reversedArr.toString().replace(/,/g, ' ');
}

module.exports = {
  reverseWordOrder: reverseWordOrder,
};
