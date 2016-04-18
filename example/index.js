"use strict";

const removeTrailingSpaces = require("../lib");

let input = "Line 1     "
   + "\n" + "Line 2        "
   + "\n" + "Line 3     \t\t\t"
   + "\n" + "Line 4          " + String.fromCharCode(160)
   + "\n" + "                   "
   + "\n" + "Line 6"
   ;

let res = removeTrailingSpaces(input);

let oLines = input.split("\n");
res.split("\n").forEach((c, i) => {
    console.log(`Removed ${oLines[i].length - c.length} spaces on line ${i + 1}`);
    // Removed 5 spaces on line 1
    // Removed 8 spaces on line 2
    // Removed 8 spaces on line 3
    // Removed 11 spaces on line 4
    // Removed 19 spaces on line 5
    // Removed 0 spaces on line 6
});
