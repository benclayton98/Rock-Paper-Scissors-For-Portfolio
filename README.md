# Rock, Paper, Scissors Challenge

## How to use

Clone the repository using - git clone git@github.com:benclayton98/rock-papers-scissors-challenge.git

```javascript

npm install

npx nodemon index.js
```
Open up your browser and navigate to http://localhost:3000

Play the game!

## Approach

I first approached this by creating my directory and installing all of the dependencies that I believed to be relevant to this project. The dependencies are express, jasmine, ejs and cypress.

I then created my index.js file (where my app is stored) and I also created my welcome.ejs file.

Then I began feature testing using cypress.

After failing my tests, I coded my index.js file and added relevant .ejs files to ensure I passed those tests.

Then I needed functionality and so created a class called RPS and used jasmine to unit test this. In similar fashion, I created failing tests and then added code to ensure that they passed.

Then when I had finished the functionality of the program so that it worked, I decided to add a bit of CSS to the program to ensure that it looked a bit nicer to play. 







# RPS Challenge

Instructions
-------

* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9:30am Monday morning

Task
----

The DFA team ( **DFAT** ) have asked you to provide a game for them. The daily grind is pretty tough and they need time to have a little fun.

As usual please start by

* Forking this repo
* TEST driving development of your app

Your task is to provide a _Rock, Paper, Scissors_ game for them so they can play on the web with the following user stories:

### Acceptance Criteria
```
As a DFAT member
So that I can see my name
I would like to register my name before playing an online game

As a DFAT member
So that I can enjoy myself away from the daily grind
I would like to be able to play rock/paper/scissors
```

Hints on functionality

- the DFAT member should be able to enter their name before the game
- the DFAT member will be presented the choices (rock, paper and scissors)
- the DFAT member can choose one option
- the game will choose a random option
- a winner will be declared

## Basic Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock

In code review we'll be hoping to see:

* All tests passing
* High test coverage
* The code is elegant: every class has a clear responsibility, methods are short etc.

### Extended Acceptance Criteria

#### Multiplayer

Change the game so that two DFAT members can play against each other ( _yes there are two of them_ ).

#### Rock, Paper, Scissors, Spock, Lizard

Use the _special_ rules ( _you can find them here http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock_ )
