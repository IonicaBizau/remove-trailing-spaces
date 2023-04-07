"use strict";

/**
 * removeTrailingSpaces
 * Remove the trailing spaces from a string.
 *
 * @name removeTrailingSpaces
 * @function
 * @param {String} input The input string.
 * @returns {String} The output string.
 */
module.exports = function removeTrailingSpaces (input) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#white_space
    return input.replace(/[\u0009\u000B\u000C\u0020\u00A0\u1680\u2000-\u200A\u202F\u205F\uFEFF]+$/gm, "");
};
