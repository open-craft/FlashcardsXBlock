import * as React from 'react';
import { createRoot } from 'react-dom/client';
import StudentUi from './student-ui';
import './style.scss';

// eslint-disable-next-line import/prefer-default-export
export const renderBlock = (element: Element | { 0?: Element } | null, { title, flashcards, styling }: XBlockData) => {
  if (!element) {
    return;
  }

  // The XBlock element is wrapped in the first key of an Object after it's updated in Studio.
  const domElement = element[0] || element;

  const root = createRoot(domElement);
  root.render(
    <React.StrictMode>
      <StudentUi title={title} flashcards={flashcards} styling={styling} />
    </React.StrictMode>,
  );
};
