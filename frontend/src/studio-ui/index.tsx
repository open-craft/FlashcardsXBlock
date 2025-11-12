import * as React from 'react';
import { createRoot } from 'react-dom/client';
import StudioUi from './studio-ui';
import './style.scss';

// eslint-disable-next-line import/prefer-default-export
export const renderEditor = (
  runtime: XBlockRuntime,
  element: Element | null,
  { title, flashcards, styling }: XBlockData,
) => {
  if (!element) {
    return;
  }

  const studioSaveUrl = runtime.handlerUrl(element, 'studio_submit');

  const root = createRoot(element);
  root.render(
    <React.StrictMode>
      <StudioUi
        initialTitle={title}
        initialFlashcards={flashcards}
        initialStyling={styling}
        studioSaveUrl={studioSaveUrl}
        runtime={runtime}
      />
    </React.StrictMode>,
  );
};
