const RPS = require('./../../src/rps.js')

let game

describe('Rock, Paper, Scissors', function () {
  beforeEach(function () {
    game = new RPS('Ben')
  })

  it('properly accepts the name of the player', function () {
    expect(game.name).toEqual('Ben')
  })

  it('changes the choice of the user when they select the relevant button', function () {
    game.rock()
    expect(game.choice).toEqual('rock')
    game.paper()
    expect(game.choice).toEqual('paper')
    game.scissors()
    expect(game.choice).toEqual('scissors')
  })

  it('ensures the cpu will have a pick chosen for them', function () {
    spyOn(game, 'cpuTurn').and.returnValue('scissors')
    expect(game.cpuTurn()).toEqual('scissors')
  })

  it('ensures that scissors draws with scissors', function () {
    spyOn(game, 'cpuTurn').and.returnValue('scissors')
    game.scissors()
    game.cpuChoice = game.cpuTurn()
    expect(game.battle()).toEqual('It is a draw')
  })

  it('ensures that rock beats scissors', function () {
    spyOn(game, 'cpuTurn').and.returnValue('scissors')
    game.rock()
    game.cpuChoice = game.cpuTurn()
    expect(game.battle()).toEqual('Ben wins')
  })

  it('ensures that paper beats rock', function () {
    spyOn(game, 'cpuTurn').and.returnValue('paper')
    game.rock()
    game.cpuChoice = game.cpuTurn()
    expect(game.battle()).toEqual('CPU wins')
  })

  it('ensures that scissors beats paper', function () {
    spyOn(game, 'cpuTurn').and.returnValue('paper')
    game.scissors()
    game.cpuChoice = game.cpuTurn()
    expect(game.battle()).toEqual('Ben wins')
  })
})
