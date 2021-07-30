const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const computerRouter = require('./router/computerGame.js')
app.use('/computerGame', computerRouter)

const indexRouter = require('./router/index.js')
app.use('/', indexRouter)

const gameRouter = require('./router/game.js')
app.use('/game', gameRouter)

const attackRouter = require('./router/attack.js')
app.use('/attack', attackRouter)



app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
