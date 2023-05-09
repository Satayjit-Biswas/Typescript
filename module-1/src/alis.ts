type CrushType = {
    name: string;
    age?: number;
    profession: string;
    address: string;
};
const crush1: CrushType = {
    name: "Suki Pakhi",
    age: 22,
    profession: "Web developer",
    address: "USA",
};

const crush2: CrushType = {
    name: "Moina Pakhi",
    profession: "web developer",
    address: "UK",
};

type Operation = (x: number, y: number) => number;
const catculate = (
    number1: number,
    number2: number,
    // operation: (x: number, y: number) => number
    operation: Operation
) => {
    return operation(number1, number2);
};

catculate(10, 20, (x, y) => x + y);
catculate(10, 20, (x, y) => x - y);
catculate(10, 20, (x, y) => x * y);
