"use strict";
const crush1 = {
    name: "Suki Pakhi",
    age: 22,
    profession: "Web developer",
    address: "USA",
};
const crush2 = {
    name: "Moina Pakhi",
    profession: "web developer",
    address: "UK",
};
const catculate = (number1, number2, 
// operation: (x: number, y: number) => number
operation) => {
    return operation(number1, number2);
};
catculate(10, 20, (x, y) => x + y);
catculate(10, 20, (x, y) => x - y);
catculate(10, 20, (x, y) => x * y);
