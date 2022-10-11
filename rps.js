
    let playerScore = 0;
    let computerScore = 0;

    let run = 0;
    
    const btns = document.querySelectorAll('.player-choice-btn');
    
    btns.forEach((btns) => {
      btns.addEventListener('click', () => {
        const choice = btns.textContent;
        playRound(choice, getComputerChoice());
      })
    })

    const your_pick = document.querySelector('#your-pick');

    const computer_pick = document.querySelector('#computer-pick');
    
    const round_result = document.querySelector('#round-result');

    const next_pick = document.querySelector('#next-pick');
    
    const score = document.querySelector('#score');

    const after_match = document.querySelector('#after-match');
    
    
    

    const playerstanding = document.createElement('div');

    
    const continue_btn = document.createElement('button');
    continue_btn.textContent = 'Continue';

    continue_btn.addEventListener('click', () => {
      
      run ++;
      console.log(run);
     
      after_match.remove();
      continue_btn.remove();
      restart_btn.remove();

      btns.forEach((btns) => {
        btns.disabled = false;
      })

      your_pick.textContent = '';
      computer_pick.textContent = '';
      round_result.textContent = '';
      next_pick.textContent = 'Choose your next hand';
      playerstanding.textContent = '';
    })


    const restart_btn = document.createElement('button')
    restart_btn.textContent = 'Start another game';

    restart_btn.addEventListener('click', () => {

      after_match.style.visibility = 'hidden';
      continue_btn.style.visibility = 'hidden';
      restart_btn.style.visibility = 'hidden';

      btns.forEach((btns) => {
        btns.disabled = false;
      })

      playerScore = 0;
      computerScore = 0;

      score.textContent = 'Your Score: ' +  playerScore +  ' Computer\'s Score: ' +  computerScore;
      
      your_pick.textContent = '';
      computer_pick.textContent = '';
      round_result.textContent = '';
    })
    
    function getComputerChoice() {
          
      let computerChoice = Math.random();
                  
      if (computerChoice <= 0.33) {
      computerChoice = "Rock";
        } else if (computerChoice >= 0.66) {
          computerChoice = "Paper";
        } else {
          computerChoice = "Scissors";
        }
        return computerChoice;
    }

    function playRound(playerInput, computerSelection) {
      
      if ((playerInput == 'Rock') && (computerSelection == 'Paper')) {

        your_pick.textContent = 'You chose Rock';
        computer_pick.textContent = ' chose Paper';
        round_result.textContent = 'You Lose! Paper beats Rock.';
      
        computerScore ++;

        } else if ((playerInput == 'Rock') && (computerSelection == 'Scissors')) {

            your_pick.textContent = 'chose Rock';
            computer_pick.textContent = 'chose Scissors';
            round_result.textContent ='You Win! Rock beats Scissors.';
            playerScore ++;

        } else if ((playerInput == 'Paper') && (computerSelection == 'Scissors')) {

            your_pick.textContent = 'chose Paper';
            computer_pick.textContent = 'chose Scissors';
            round_result.textContent = 'You Lose! Scissors beats Paper.';
            computerScore ++;

        } else if ((playerInput == 'Paper') && (computerSelection == 'Rock')) {

            your_pick.textContent = 'chose Paper';
            computer_pick.textContent = 'chose Rock';
            round_result.textContent ='You Win! Paper beats Rocks.';
            playerScore ++;

        } else if ((playerInput == 'Scissors') && (computerSelection == 'Rock')) {

            your_pick.textContent = 'chose Scissors';
            computer_pick.textContent = 'chose Rock';
            round_result.textContent ='You Lose! Rock beats Scissors.';
            computerScore ++;

        } else if ((playerInput == 'Scissors') && (computerSelection == 'Paper')) {

            your_pick.textContent = 'chose Scissors';
            computer_pick.textContent = 'chose Paper';
            round_result.textContent ='You Win! Scissors beats Rock!';
            playerScore ++;

        } else {
            your_pick.textContent = 'chose ' + playerInput;
            computer_pick.textContent = 'chose ' + computerSelection;
            round_result.textContent = 'Tie!';
        }
    
      score.textContent = 'Your Score: ' +  playerScore +  ' Computer\'s Score: ' +  computerScore;
      
      if ((playerScore == 3) && (computerScore < 3) && (run==0)) {

        btns.forEach((btns) => {
          btns.disabled = true;
        })

        after_match.style.visibility = 'visible';
        continue_btn.style.visibility = 'visible';
        restart_btn.style.visibility = 'visible';
        
        playerstanding.textContent = "Match Result: You Win!";
        score.appendChild(playerstanding);

        after_match.textContent = 'Continue current game or start another?';
        after_match.appendChild(continue_btn);
        after_match.appendChild(restart_btn);

        next_pick.textContent = '';

        } else if ((playerScore < 3) && (computerScore == 3) && (run==0)) {
          btns.forEach((btns) => {
            btns.disabled = true;
          })
          after_match.style.visibility = 'visible';
          continue_btn.style.visibility = 'visible';
          restart_btn.style.visibility = 'visible';

          playerstanding.textContent = "Match Result: You Lose!";
          score.appendChild(playerstanding);

          after_match.textContent = 'Continue current game or start another?';
          after_match.appendChild(continue_btn);
          after_match.appendChild(restart_btn);

          next_pick.textContent ='';

        } else {
        next_pick.textContent = 'Choose your next hand';
      }
    }
      
    

    

