const  score = {
    wins: 0,
    losses: 0,
    tie: 0
  }


  function playgame(playermove) {
    const computerMove = PiccomuterMove();
    let result = '';

    if (playermove === 'stone') {
      if (computerMove === 'stone') {
        result = 'tie';
      }
      else if (computerMove === 'paper') {
        result = 'lose';
      }
      else if (computerMove === 'scissors') {
        result = 'win';
      }
    }

    else if (playermove === 'paper') {
      if (computerMove === 'stone') {
        result = 'win';
      }
      else if (computerMove === 'paper') {
        result = 'tie';
      }
      else if (computerMove === 'scissors') {
        result = 'lose';
      }
    }
    else if (playermove === 'scissors') {
      if (computerMove === 'stone') {
        result = 'lose';
      }
      else if (computerMove === 'paper') {
        result = 'win';
      }
      else if (computerMove === 'scissors') {
        result = 'tie';
      }
    } 
   
    if (result === 'win') {
    score.wins += 1;
  }
  else if (result === 'lose') {
    score.losses += 1;
  }
  else if (result === 'tie') {
    score.tie += 1;
  }
  const strscore = JSON.stringify(score);
  localStorage.getItem('massege', 'strscore');
   

   alert(`you chose ${playermove},computer picked ${computerMove} you ${result}
wins : ${score.wins} losses :${score.losses} ties : ${score.tie}`
    );
  }
 
 
  


  let computerMove = '';
  function PiccomuterMove() {
    const RandomNumber = Math.random();

    if (RandomNumber > 0 && RandomNumber < 1 / 3) {
      return 'stone';
    }
    else if (RandomNumber >= 1 / 3 && RandomNumber < 2 / 3) {
      return 'paper';
    }
    else if (RandomNumber >= 2 / 3 && RandomNumber <= 1) {
      return 'scissors';
    }
  }
