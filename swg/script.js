let swg = ['snake', 'water', 'gun']
let win = document.getElementById('win')
let number = 0

function random(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  let shuffle = shuffled.slice(0, num);

  return shuffle[0]
}

let compMove = random(swg, 1)
let userMove;

getUserInput()

function getUserInput() {
  userMove = prompt('Snake, Water or Gun')

  if (swg.includes(userMove)) {
    number += 1
    random(swg, 1)
    check()
  }
}

function check() {
  if (swg.includes(userMove)) {
    if (userMove == compMove) {
      alert(`It's a Tie`)
      print('No one')
    }
    if (userMove == 'snake' && compMove == 'water') {
      alert(`You won! Computer's move was ${compMove}`)
      print('You')
    }
    if (userMove == 'snake' && compMove == 'gun') {
      alert(`Computer won! It's move was ${compMove}`)
      print('Computer')
    }
    if (userMove == 'water' && compMove == 'snake') {
      alert(`Computer won! It's move was ${compMove}`)
      print('Computer')
    }
    if (userMove == 'water' && compMove == 'gun') {
      alert(`You won! Computer's move was ${compMove}`)
      print('You')
    }
    if (userMove == 'gun' && compMove == 'snake') {
      alert(`You won! Computer's move was ${compMove}`)
      print('You')
    }
    if (userMove == 'gun' && compMove == 'water') {
      alert(`Computer won! It's move was ${compMove}`)
      print('Computer')
    }
  }
  else {
    alert(`Invalid Input, You did ${userMove}`);
  }
  let again = confirm('Play again?')
  
  if (again) {
    getUserInput()
  }
}

function print(name) {
  let p = document.createElement('p')
  p.innerHTML = `${number}. ${name} won! Computer's move was ${compMove}`
  win.append(p)
}
