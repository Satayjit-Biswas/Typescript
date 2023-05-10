type NoobDeveloper = {
    name: string;
};

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number;
// };

type JuniorDeveloper = NoobDeveloper & {
    name: string;
    expertise: string;
    experience: number;
};
enum level {
    junior = "junior",
    mid = "mid",
    senior = "senior",
}
// type NextLevelDeveloper = JuniorDeveloper & {
//     leaderShip: number;
//     level: "junior" | "mid" | "senior";
// };

type NextLevelDeveloper = JuniorDeveloper & {
    leaderShip: number;
    level: "junior" | "mid" | "senior";
};
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Satayjit Biswas",
    expertise: "Javascript",
    experience: 1,
};

const NextDeveloper: NextLevelDeveloper = {
    name: "Satayjit Biswas",
    expertise: "Javascript",
    experience: 1,
    leaderShip: 1,
    level: "mid",
};

console.log(NextDeveloper);
