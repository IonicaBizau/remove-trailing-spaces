
# remove-trailing-spaces [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/remove-trailing-spaces.svg)](https://travis-ci.org/IonicaBizau/remove-trailing-spaces/) [![Version](https://img.shields.io/npm/v/remove-trailing-spaces.svg)](https://www.npmjs.com/package/remove-trailing-spaces) [![Downloads](https://img.shields.io/npm/dt/remove-trailing-spaces.svg)](https://www.npmjs.com/package/remove-trailing-spaces) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Remove the trailing spaces from a string.

## :cloud: Installation

```sh
$ npm i --save remove-trailing-spaces
```


## :clipboard: Example



```js
const removeTrailingSpaces = require("remove-trailing-spaces");

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
```

## :memo: Documentation


### `removeTrailingSpaces(input)`
Remove the trailing spaces from a string.

#### Params
- **String** `input`: The input string.

#### Return
- **String** The output string.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`write-file-trim`](https://github.com/IonicaBizau/write-file-trim#readme)—Write the content in a file after removing the trailing spaces.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
