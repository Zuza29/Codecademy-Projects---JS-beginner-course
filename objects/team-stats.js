const team = {
    _players: [
        {
            firstName: "Legolas",
            lastName: "Greenleaf",
            age: 2931,
        },
        {
            firstName: "Frodo",
            lastName: "Baggins",
            age: 50,
        },
        {
            firstName: "Aragorn",
            lastName: "Elessar",
            age: 87,
        },
    ],
    _games: [
        {
            opponent: "The Nazgul",
            teamPoints: 53,
            opponentPoints: 38,
        },
        {
            opponent: "Sauron",
            teamPoints: 82,
            opponentPoints: 29,
        },
        {
            opponent: "Shelob",
            teamPoints: 15,
            opponentPoints: 40,
        },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
        };
        this._players.push(newPlayer);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints,
        };
        this._games.push(newGame);
    },
};

team.addGame("Titans", 100, 98);
console.log(team);
