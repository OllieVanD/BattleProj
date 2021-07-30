const Battle = require('../src/battle.js')
const Player = require('../src/player.js')

const computerGameSetup = (req, res) => {
    const battle = new Battle(new Player(req.body.name1), new Player('CPU'))
       
    req.app.locals.battle = battle
	req.app.locals.compBool = true
	res.render('game.ejs', {
        name1: req.app.locals.battle.player1.name,
        name2: req.app.locals.battle.player2.name,
        player1HP: req.app.locals.battle.player1.hitpoints,
        player2HP : req.app.locals.battle.player2.hitpoints,
        damage: req.app.locals.battle.damage,
        winStatement: req.app.locals.battle.winStatement,
        // compBool : req.app.locals.compBool
    });
}

module.exports = {computerGameSetup}