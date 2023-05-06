// 1 . Normal Function
// 2 . Arrow Function

// Normal Function

function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 3);

// Arrow Function

const sum = (num1: number, num2: number): number => num1 + num2;

sum(2, 3);

// Function use to object

const person: {
    name: string;
    balance: number;
    addBalance(money: number): number;
} = {
    name: "Satayjit Biswas",
    balance: 5,
    addBalance(money: number) {
        return this.balance + money;
    },
};

const person1: {
    name: string;
    balance: number;
    addBalance(money: number): void;
} = {
    name: "Satayjit Biswas",
    balance: 5,
    addBalance(money: number) {
        console.log(`My New balance is ${this.balance + money}`);
    },
};
