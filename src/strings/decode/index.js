const str1 = 'aaaabbcddd';
const expected1 = 'a4b2c1d3';

const str2 = '';
const expected2 = '';

const str3 = 'a';
const expected3 = 'a';

const str4 = 'bbcc';
const expected4 = 'bbcc';

const str5 = 'bb';
const expected5 = 'bb';
// Explanation: b2 is not shorter than original so nothing is done.

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {
  let encodedStr = '';
  let duplicateCount = 1;

  for (let i = 0; i < str.length - 1; ) {
    const char = str[i];

    for (let j = i + 1; j < str.length; j++) {
      const nextChar = str[j];

      if (char === nextChar) {
        duplicateCount++;
      }

      if (char !== nextChar || j === str.length - 1) {
        encodedStr += char + duplicateCount;
        duplicateCount = 1;
        i = j;
        break;
      } else {
      }
    }
  }

  return encodedStr.length > 0 && encodedStr.length < str.length
    ? encodedStr
    : str;
}

module.exports = { encodeStr };
