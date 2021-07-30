const attackPlayer = (req,res) => {
    let computerAttBool = false;
if (req.body.playerOneAttack === '' && req.app.locals.battle.player1Turn) {
    player1Attack(req, res)
    // if (req.app.locals.battle.player2.name === 'CPU' && req.app.locals.battle.winStatement === '') { 
    //     // computerAttack(req,res)
        
    // }
} 
else if (req.body.playerTwoAttack === '' && req.app.locals.battle.player1Turn ===false) {
    player2Attack(req)
    
    
}

res.render('game.ejs',{
    name1: req.app.locals.battle.player1.name,
    name2: req.app.locals.battle.player2.name,
    player1HP: req.app.locals.battle.player1.hitpoints,
    player2HP : req.app.locals.battle.player2.hitpoints,
    damage: req.app.locals.battle.turnStatement,
    winStatement: req.app.locals.battle.winStatement,
    turnStatement: req.app.locals.battle.turnStatement,
    compBool : req.app.locals.compBool

    });
}

function player2Attack(req) {
    console.log("player 2 attacks!")
    req.app.locals.battle.player2.attack(req.app.locals.battle.player1);
    req.app.locals.battle.winStatement = req.app.locals.battle.player2.winStatement
    req.app.locals.battle.player1Turn = true
    req.app.locals.battle.turnStatement = `${req.app.locals.battle.player2.name} did ${req.app.locals.battle.player2.damage} damage, it's your turn ${req.app.locals.battle.player1.name}!`
}

function player1Attack (req, res) {
    console.log(` Testing Req: ${req}`)
    req.app.locals.battle.player1.attack(req.app.locals.battle.player2);
    req.app.locals.battle.winStatement = req.app.locals.battle.player1.winStatement
    req.app.locals.battle.player1Turn = false
    req.app.locals.battle.turnStatement = `${req.app.locals.battle.player1.name} did ${req.app.locals.battle.player1.damage} damage, it's your turn ${req.app.locals.battle.player2.name}!`
 
}


module.exports = {attackPlayer}