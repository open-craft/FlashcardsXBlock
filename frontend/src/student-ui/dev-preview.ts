import { renderBlock } from './index';

renderBlock(document.querySelector('#root'), {
  title: 'Sample Flashcards',
  flashcards: [
    {
      front: '<b>What is the capital of France?</b>',
      back: '<b>Paris</b>',
    }, {
      front: '<b>What is 2 + 2?</b>',
      back: '<b>4</b>',
    },
  ],
  styling: {
    backgroundColor: '#001155',
    textColor: '#ffffff',
    fontSize: '16px',
    borderColor: '#ffffff',
  },
});
