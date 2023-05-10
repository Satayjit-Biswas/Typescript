let emani: any;

emani = "Next Level Web development";

(emani as string).length;

function kgtoGram(param: string | number): string | number | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `the converted result is :${value} gram`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}

// const resulttoBeNumber = kgtoGram(5);
const resulttoBeNumber = kgtoGram(5) as number;
const resulttoBeString = kgtoGram("50") as string;

console.log({ resulttoBeNumber });
console.log({ resulttoBeString });

type CustomErrorTYpe = {
    message: string;
};

try {
} catch (err) {
    console.log((err as CustomErrorTYpe).message);
}
