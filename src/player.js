module.exports = class Player {
	constructor(name) {
		this.name = name
		this.hitpoints = 100;
		this.damage = 0;
        this.winStatement = ''
	}
	attack(enemy) {
		this.damage = Math.floor(Math.random() * 20);
		enemy.hitpoints -= this.damage;
        this.checkIfDead(enemy)
	}
	checkIfDead(enemy) {
		if (enemy.hitpoints <= 0) {
            enemy.hitpoints = 0
		    this.winStatement =  `${this.name} has won`
        }
	}
};
