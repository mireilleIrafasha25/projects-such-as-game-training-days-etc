const team={
    //properties of team object
    _players:[{firstname:'Aimme',lastname:'Pacifique',age:23}],
    _games:[{opponent:'', teamPoints:'', opponentPoints:''}],
    get players() {
        return this._players;
    },
      get games()
      
      {
        return this._games;
      },
      /// method to add a new player to the team
      addPlayer(newFirstName, newLastName, newAge) {
        const newPlayer = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this._players.push(newPlayer);
    },
    // // Method to add a new game result
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(newGame);
       
    }
    
    }
    //call function to addplayer
team.addPlayer('Bugs','Bunny',76);
console.log(... team._players);
//call function taht adding new game
team.addGame('Titans',100,98)
console.log(... team._games)

 
