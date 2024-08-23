"use strict";
const fibonacci = (num) => {
    if (typeof num === "string") {
        num = parseInt(num);
    }
    if (num < 0) {
        return "OOPS";
    }
    if (num <= 1) {
        return num;
    }
    if (num === 2) {
        return 1;
    }
    let a = 0;
    let b = 1;
    for (let i = 2; i <= num; i++) {
        let tmp = b;
        b = a + b;
        a = tmp;
    }
    return b;
};
// Do not edit below this line
module.exports = fibonacci;
