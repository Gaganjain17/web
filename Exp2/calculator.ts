import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator(operation: string, nums1: number, nums2: number): number {
    let result: number;

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
            throw new Error("Invalid Operation")
    }

    return result;
}

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        rl.question("Enter operation (+, -, *, /): ", (operation) => {
            const result: number = calculator(operation, parseFloat(num1), parseFloat(num2));
            console.log(`Result of ${num1} ${operation} ${num2} is ${result}`);
            rl.close();
        });
    });
});
