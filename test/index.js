"use strict";

const tester = require("tester")
    , remove = require("..")
    ;

tester.describe("remove-trailing-spaces", t => {
    t.should("remove trailing spaces", () => {
        t.expect(remove(" foo    ")).toBe(" foo");
        t.expect(remove(" foo    \t\n bar  \t\t")).toBe(" foo\n bar");
    });
});
