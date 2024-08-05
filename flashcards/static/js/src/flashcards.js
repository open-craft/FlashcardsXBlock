/* Javascript for FlashcardsXBlock. */
function FlashcardsXBlock(runtime, element, params) {
  /* Initializing the variables for displaying the current question
     and total questions.
  */
  var currentNumber = -1;
  var totalNumber = params.flashcards.length;
  $('.fc-container').hide();

  /* Show the answer of the question by cliking on the question */
  $('.fc-card').click(function () {
    $('.fc-card').toggleClass('is-flipped');
  });

  $('.next-btn').click(function () {
    currentNumber++;
    $('.fc-card').removeClass('is-flipped');
    $('.fc-container').show();
    $('#fc-question').html(`${params.flashcards[currentNumber]["front"]}`);
    $('#fc-answer').html(`${params.flashcards[currentNumber]["back"]}`)
    $('#current-fc').html(`${currentNumber + 1}`);
    $('.next-btn').html('Nextt');
    /* If the student reaches the end say FINISHED and disable going further */
    if (currentNumber == totalNumber - 1) {
      $('.next-btn').html('You did it!');
      $('.next-btn').addClass('finished-btn').removeClass('next-btn').off('click');
    }
  });
}

