// player 중 name 있고, 몇몇은 age가 있음
type Player = {
    name: string,
    age?: number
};

const player1: Player = {
    name: "nico"
};

const player2: Player = {
    name: "niconi",
    age: 17
};