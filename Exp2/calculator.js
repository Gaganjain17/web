"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculator(operation, nums1, nums2) {
    var result;
    switch (operation) {
        case '+':
            result = nums1 + nums2;
            break;
        case '-':
            result = nums1 - nums2;
            break;
        case '*':
            result = nums1 * nums2;
            break;
        case '/':
            result = nums1 / nums2;
            break;
        default:
            throw new Error("Invalid Operation");
    }
    return result;
}
rl.question("Enter first number: ", function (num1) {
    rl.question("Enter second number: ", function (num2) {
        rl.question("Enter operation (+, -, *, /): ", function (operation) {
            var result = calculator(operation, parseFloat(num1), parseFloat(num2));
            console.log("Result of ".concat(num1, " ").concat(operation, " ").concat(num2, " is ").concat(result));
            rl.close();
        });
    });
});
