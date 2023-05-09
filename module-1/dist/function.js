"use strict";
// 1 . Normal Function
// 2 . Arrow Function
// Normal Function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// Arrow Function
const sum = (num1, num2) => num1 + num2;
sum(2, 3);
// Function use to object
const person = {
    name: "Satayjit Biswas",
    balance: 5,
    addBalance(money) {
        return this.balance + money;
    },
};
const person1 = {
    name: "Satayjit Biswas",
    balance: 5,
    addBalance(money) {
        console.log(`My New balance is ${this.balance + money}`);
    },
};
