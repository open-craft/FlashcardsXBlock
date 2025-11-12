import { renderEditor } from './index';

const mockRuntime: XBlockRuntime = {
  handlerUrl: (e, t) => `${e}-${t}`,
  // eslint-disable-next-line no-console
  notify: (action, data) => console.log(`${action} ${JSON.stringify(data)}`),
};

renderEditor(mockRuntime, document.querySelector('#root'), {
  title: 'Sample Deck',
  flashcards: [
    {
      front: '<b>Question 1</b>',
      back: '<b>Answer 1</b>',
    },
  ],
  styling: {
    fontSize: '16px',
    backgroundColor: '#f8f9fa',
    textColor: '#212529',
    borderColor: '#dee2e6',
  },
});
