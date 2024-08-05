function FlashcardsEditXBlock(runtime, element, params) {
  var addFieldButton = document.getElementById("more_fields");
  var flashCardList = document.getElementById('flashcard-list')
  var flashcardNumber = params.flashcards.length || 1;
  $('#flashcard-title').val(params.title);

  /* Re-populate filed with the available data */
  if (params.flashcards.length > 0) {
    for (var i = 0; i < flashcardNumber; i++) {
      var front = params.flashcards[i].front;
      var back = params.flashcards[i].back;
      var fields = `<div class="fc-item">
        <label class="label setting-label" for="flashcards">Flashcard (  ${i + 1} )</label>
        <input class="input setting-input" name="front" placeholder="Front" type="text"  value="${front}"/>
        <input class="input setting-input" name="back" placeholder="Back" type="text" value="${back}"/>
        </div>`;
      flashCardList.insertAdjacentHTML("beforeend", fields);
    }
  }

  function add_fields() {
    var fields = '<div class="fc-item">\n\
      <label class="label setting-label" for="flashcards">Flashcard (' + flashcardNumber + ')</label>\n\
      <input class="input setting-input" name="front" placeholder="Front" type="text" />\n\
      <input class="input setting-input" name="back" placeholder="Back" type="text" />\n\
      </div>';
    flashCardList.insertAdjacentHTML("beforeend", fields);
    flashcardNumber++;
  }

  addFieldButton.addEventListener("click", add_fields);

  $(element).find('.save-button').bind('click', function () {
    var saveFlashCardsEndpoint = runtime.handlerUrl(element, 'studio_submit');
    /* Every flashcard (fc-item) has two input fields, "front" and "back" */
    var flashcardArray = [];
    var items = document.getElementsByClassName('fc-item');

    for (var i = 0; i < items.length; i++) {
      /* Read every flashcard and save input values to a dictionary object */
      var flashCardObject = {}
      var inputs = items[i].getElementsByTagName('input');
      flashCardObject = {
        "front": inputs[0].value,
        "back": inputs[1].value
      }
      flashcardArray.push(flashCardObject);
    }

    var data = {
      title: $('#flashcard-title').val(),
      flashcards: flashcardArray
    };

    runtime.notify('save', { state: 'start' });
    $.post(saveFlashCardsEndpoint, JSON.stringify(data)).done(function (response) {
      runtime.notify('save', { state: 'end' });
    });
  });

  $(element).find('.cancel-button').bind('click', function () {
    runtime.notify('cancel', {});
  });
}
