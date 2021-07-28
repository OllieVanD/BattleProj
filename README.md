### Acceptance Criteria
```
As two Players,
So we can play a personalised game of Battle,
We want to start a fight by entering our Names and seeing them
```
```
As Player 1,
So I can see how close I am to winning
I want to see Player 2's Hit Points
```
|userInput|=>|browser|=>|Controller|
|---|---|---|---|---|
||types url|=>|GET host: http://localhost:3000||
||HTML rendered|<=|Correct, status 200 message sent||
||Text entered into 2 form boxes|=>|POST request:http://localhost:3000/game||
||HTML rendered|<=|Correct, status 200 message sent||
||||||
||||||
||||||
||||||
||||||

```
As Player 1,
So I can win a game of Battle,
I want to attack Player 2, and I want to get a confirmation
```



```
As Player 1,
So I can start to win a game of Battle,
I want my attack to reduce Player 2's HP by 10
```
```
As two Players,
So we can continue our game of Battle,
We want to switch turns
```
```
As Player 1,
So I can see how close I am to losing,
I want to see my own hit points
```
```
As Player 1,
So I can lose a game of Battle,
I want Player 2 to attack me, and I want to get a confirmation
```
```
As Player 1,
So I can start to lose a game of Battle,
I want Player 2's attack to reduce my HP by 10
```
```
As a Player,
So I can Lose a game of Battle,
I want to see a 'Lose' message if I reach 0HP first
```

||||


