// const searchName = (value: string ) => {
//     if (value === null) {
//         console.log("There is Nothing to search");
//     } else {
//         console.log("Serching....");
//     }
// };

// searchName("satay");

const searchName = (value: string | null) => {
    if (value === null) {
        console.log("There is Nothing to search");
    } else {
        console.log("Serching....");
    }
};

searchName(null);

const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === "number") {
        const convertSpeed = (speed * 1000) / 3600;
        console.log(convertSpeed);
    }

    if (typeof speed === "string") {
        const [value, unit] = speed.split(" ");
        const convertSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(convertSpeed);
    } else {
        console.log("Sorry..");
    }
};

getMyCarSpeed(10);
getMyCarSpeed("10 kmh");
