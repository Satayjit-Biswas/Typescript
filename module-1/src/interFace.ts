type User = {
    name: string;
    age: number;
};

interface IUser {
    name: string;
    age: number;
}

const userWithTypeAlias: User = {
    name: "Type Alias",
    age: 100,
};

const userWithINterfaceAlias: IUser = {
    name: "Type Alias",
    age: 100,
};
// With Function
type addNumbersType = (num1: number, num2: number) => number;
const addnumber1: addNumbersType = (num1, num2) => num1 + num2;

interface addNumbersIType {
    (num1: number, num2: number): number;
}
const addnumber2: addNumbersIType = (num1, num2) => num1 + num2;

// With Array

const rollnumber1: number[] = [1, 2, 3];

type rollnumberType = number[];
const rollnumber2: rollnumberType = [1, 2, 3];

interface rollnumberInterface {
    [index: number]: number;
}
const rollnumber3: rollnumberInterface = [1, 2, 3];
