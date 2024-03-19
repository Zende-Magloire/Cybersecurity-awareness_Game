$(document).ready(function() {
  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;
  let pairsMatched = 0;

  $('.memory-card').on('click', function() {
    if (lockBoard) return;
    if (this === firstCard) return;

    $(this).toggleClass('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
    } else {
      hasFlippedCard = false;
      secondCard = this;

      checkForMatch();
    }
  });

  function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    if (isMatch) {
      disableCards();
      pairsMatched++;
      if (pairsMatched === $('.memory-card').length / 2) {
        setTimeout(() => {
          showCongratsMessage();
        }, 500);
      }
    } else {
      unflipCards();
    }
  }

  function disableCards() {
    $(firstCard).off('click');
    $(secondCard).off('click');
    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
      $(firstCard).toggleClass('flip');
      $(secondCard).toggleClass('flip');

      resetBoard();
    }, 1000);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  function showCongratsMessage() {
    $('.container').append('<div class="congrats-message animate__animated animate__bounceIn">Great job, cybersecurity expert!</div>');
    $('.container').append('<button class="reset-button">Play Again</button>');
    $('.reset-button').on('click', function() {
      resetGame();
    });
  }
  
  function resetGame() {
    pairsMatched = 0;
    $('.memory-card').each(function() {
      $(this).removeClass('flip');
      $(this).on('click');
    });
    $('.congrats-message').remove();
    $('.reset-button').remove();
  }  
});