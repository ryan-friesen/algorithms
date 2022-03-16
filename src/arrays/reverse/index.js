/**
 * Reverses the given arr in place without built in methods.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The given arr after being reversed.
 */
function reverseArr(items) {
    for (let i = 0; i < Math.floor(items.length / 2); i++) {
        let tempArrItem = items[i];
        let tempArrItem2 = items[items.length - 1 - i];
        items[items.length - (i + 1)] = tempArrItem;
        items[i] = tempArrItem2;
    }

    return items;

}

module.exports = {
    reverseArr,
};