
class RPS {
  constructor (name) {
    this.name = name
    this.choice = ''
    this.cpuChoice = ''
  }

  rock () {
    this.choice = 'rock'
  }

  paper () {
    this.choice = 'paper'
  }

  scissors () {
    this.choice = 'scissors'
  }

  cpuTurn () {
    const randomiser = Math.floor(Math.random() * 3)
    if (randomiser < 1) {
      this.cpuChoice = 'rock'
    } else if (randomiser < 2) {
      this.cpuChoice = 'paper'
    } else {
      this.cpuChoice = 'scissors'
    }
  }

  battle () {
    if (this.cpuChoice === this.choice) {
      return 'It is a draw'
    }

    if (this.cpuChoice === 'rock') {
      if (this.choice === 'scissors') {
        return 'CPU wins'
      } else if (this.choice === 'paper') {
        return `${this.name} wins`
      }
    }

    if (this.cpuChoice === 'paper') {
      if (this.choice === 'rock') {
        return 'CPU wins'
      } else if (this.choice === 'scissors') {
        return `${this.name} wins`
      }
    }
    
    if (this.cpuChoice === 'scissors') {
      if (this.choice === 'rock') {
        return `${this.name} wins`
      } else if (this.choice === 'paper') {
        return 'CPU wins'
      }
    }
  }
}

module.exports = RPS
