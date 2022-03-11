
/**
 * Outputs the longest array item (or 0 if it's null/undefined) with a single
 * pass through
 * @param {Any[]} array The sample array to be passed to the longestString function
 * @returns {number} longestItemLength;
 */
function longestString(array) {
    let mainArray = array;
    let longest = 0;
    for (i = 0; i < mainArray.length; i++) {
        try {
            if (mainArray[i].length > longest) {
                longest = mainArray[i].length;
            };
        }
        catch (err) {
            break;
        }
    };

    return longest;
};

module.exports = {
    longestString,
};