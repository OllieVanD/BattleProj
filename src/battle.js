class Battle {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.damage = null;
        this.winStatement = '';
        this.player1Turn = true;
        this.turnStatement = ''
    }

}

module.exports = Battle