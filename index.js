const express = require('express');
const app = express();
const port = 3000;
const Player = require('./src/player.js');
const $ = require('jquery');

const player1 = new Player();
const player2 = new Player();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/jquery', express.static('node_modules/jquery/dist/'));

app.get('/', (req, res) => {
	console.log('in the get method!');
	res.render('index.ejs');
});

let dict = {
	name1        : player1.name,
	name2        : player2.name,
	player1HP    : player1.hitpoints,
	player2HP    : player2.hitpoints,
	damage       : null,
	winStatement : ''
};

app.post('/attack', (req, res) => {
	if (req.body.playerOneAttack === '') {
		player1.attack(player2);
		dict.damage = player1.damage;
		dict.player2HP = player2.hitpoints;
		dict.winStatement = player1.winStatement;
		// document.getElementById('#bar1').css(`width : ${player2.hitpoints}%`);
	} else if (req.body.playerTwoAttack === '') {
		player2.attack(player1);
		dict.damage = player2.damage;
		dict.player1HP = player1.hitpoints;
		dict.winStatement = player2.winStatement;
		// $(() => {
		// 	$('#bar1').css(`width: ${player1.hitpoints}%`);
		// });
	}
	// res.redirect('back');
	res.render('game.ejs', dict);
});
// dict
app.post('/game', (req, res) => {
	if (req.body.name1) player1.name = req.body.name1;
	dict.name1 = req.body.name1;
	if (req.body.name2) player2.name = req.body.name2;
	dict.name2 = req.body.name2;
	console.log('in the post method!');
	res.render('game.ejs', dict);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
