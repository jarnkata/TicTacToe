var gameBoard = {
  myArray: [],
  createBoard3: function (rows, cols) {
    let value = '-'
    for (let i = 0; i < rows; i++) {
      this.myArray.push([])
      this.myArray[i].push(new Array(cols))
      for (let j = 0; j < cols; j++) {
        this.myArray[i][j] = value
      }
    }
    console.log(this.myArray)
  },
  game: function (a, b, playerId) {
    this.myArray[a][b] = playerId
    console.log(this.myArray)
    return this.myArray
  },
  /** asking from users that what item will be marked on the board*/
  WhatRow: function (playerId, rows, cols, i, hits) {
    let a
    let b
    let x = i
    let winL = hits
    let readlineSync = require('readline-sync')
    a = readlineSync.question(playerId + 'From witch row do you want to select item 0- row length -1: ')
    if (isNaN(a)) {
      console.log('please use numbers between  0-row length -1!: ')
      gameBoard.createBoard3(rows, cols)
    } if (a < 0 || a > rows - 1) {
      console.log('please use numbers between 0- row length -1!: ')
      gameBoard.createBoard3(rows, cols)
    }
    b = readlineSync.question(playerId + ' From witch col do you want to select item 0- row length -1?: ')
    if (isNaN(b)) {
      console.log('please use numbers between 0- row length -1!: ')
      gameBoard.createBoard3(rows, cols)
    } if (b < 0 || b > rows - 1) {
      console.log('please use numbers between 0- row lenght -1!: ')
    }
    if (this.myArray[a][b] === '-') {
      gameBoard.game(a, b, playerId)
    } else {
      console.log('Sorry that item was already taken: ')
      gameBoard.WhatRow(playerId)
    }
    if (x >= hits) {
      gameBoard.checkWinner(this.myArray, a, b, playerId, winL)
    }
  },
/** Combuter rendomly select items from board */
  combuterRow: function (playerId, rows, cols, i, hits) {
    let a
    let b
    let x = i
    let winL = hits
    a = Math.floor((Math.random() * rows))
    b = Math.floor((Math.random() * rows))
    if (this.myArray[a][b] === '-') {
      gameBoard.game(a, b, playerId)
    } else {
      do {
        a = Math.floor((Math.random() * rows))
        b = Math.floor((Math.random() * rows))
      }
      while (this.myArray[a][b] !== '-')
      if (this.myArray[a][b] === '-') {
        gameBoard.game(a, b, playerId)
      }
    }
    if (x >= hits) {
      gameBoard.checkWinner(this.myArray, playerId, winL)
    }
  },
  checkWinner: function (myArray, playerId, winL) {
    console.log('Checking for winner is not working')
   let size = myArray.length
    for (let i = 0; i < size; i++) {
      if (myArray[i][0] === playerId) {
        let j;
    
        for (j = 1; j < size; j++) {
          if (myArray[i][j] !== playerId) {
            break
          }
        }
        if (j === size) {
          console.log(playerId + ' Has won')
        }
      }
    }
    
    // vertical check
    for (let i = 0; i < size; i++) {
      if (myArray[0][i] === playerId) {
        let j;
    
        for (j = 1; j < size; j++) {
          if (myArray[j][i] !== playerId) {
            break
          }
        }

        if (j === size) {
          console.log(playerId + ' Has won')
        }
      }
    }
    
    // diagonals check
    let i
    
    for (i = 0; i < size; i++) {
      if (myArray[i][i] !== playerId) {
        break
      }
    }
    if (i === size) {
      console.log(playerId + ' Has won')
    }
    
    for (i = 0; i < size; i++) {
      if (myArray[i][(size - 1) - i] !== playerId) {
        break
      }
    }
    
  }
}
/**
 * Main function for my tic tac toe game
 */
function main () {
  let readlineSync = require('readline-sync')
  let rows = readlineSync.question('How many rows do you want in your game: ')
  if (rows < 3) {
    console.log('There has to be 3 or more rows in the game: ')
    rows = readlineSync.question('How many rows do you want in your game: ')
  }
  let cols = rows
  let hits = readlineSync.question('How many x or o is needed for win: ')
  if (hits > rows) {
    console.log('How many x or o needed for win cannot be bigger than rows!: ')
    this.hits = readlineSync.question('How many x or o is needed for win: ')
  }
  let secondPlayer = readlineSync.question('Write Pc if you like to play alone And Dual if you have paddy!: ')
  console.log(typeof secondPlayer)
  if (secondPlayer !== 'Pc' & secondPlayer !== 'Dual') {
    console.log('Are you sure that you have written Pc or Dual write? Try again!: ')
    secondPlayer = readlineSync.question('Write PC if you like to play alone And Dual if you have paddy!: ')
  }
  /** First time enabling tic tac toe board  */
  gameBoard.createBoard3(rows, cols)
  let playerId = ''
  let y = true
  let p = true
  let two = 'Dual'
  let one = 'Pc'

  if (secondPlayer === two) {
    while (y) {
      for (let i = 0; i < (rows * cols); i++) {
        if (secondPlayer === two) {
          if (i === 0 || i % 2 === 0) {
            playerId = 'x'
            console.log(playerId + ' ')
            gameBoard.WhatRow(playerId, rows, cols, i, hits)
          } else {
            playerId = 'o'
            console.log(playerId + ' ')
            gameBoard.WhatRow(playerId, rows, cols, i)
          }
        }
      }
      y = false
    }
  } else if (secondPlayer === one) {
    while (p) {
      for (let i = 0; i < (rows * rows); i++) {

        if (i === 0 || i % 2 === 0) {
          playerId = 'x'
          console.log(playerId + ' ')
          gameBoard.WhatRow(playerId, rows, cols, i)
        } else {
          playerId = 'o'
          console.log(playerId + ' ')
          gameBoard.combuterRow(playerId, rows, cols, i, hits)
        }
      }
      p = false
    }
  }
}
main()
