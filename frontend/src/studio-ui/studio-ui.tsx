import * as React from 'react';
import StylingPage from './styling-page';
import EditingPage from './editing-page';

enum ConfigPage {
  Styling, Editing,
}

interface StudioUiProps {
  initialTitle: string
  initialFlashcards: Flashcard[]
  initialStyling: FlashcardStyling
  studioSaveUrl: string
  runtime: XBlockRuntime
}

interface ActionButtonLinkProps {
  className: string
  onClick: ()=>void
  label:string
}
function ActionButtonLink({ className, onClick, label }:ActionButtonLinkProps) {
  return (
    <li className="action-item">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a
        href="#"
        className={`button action-primary ${className}`}
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
}

export default function StudioUi({
  initialTitle, initialFlashcards, initialStyling, studioSaveUrl, runtime,
}: StudioUiProps) {
  const [step, setStep] = React.useState(ConfigPage.Styling);
  const [styling, setStyling] = React.useState(initialStyling);
  const [title, setTitle] = React.useState(initialTitle);
  const [flashcards, setFlashcards] = React.useState(initialFlashcards);

  const handleSave = () => {
    runtime.notify('save', { state: 'start' });

    const flashcardsArray = flashcards.filter(card => card.front && card.back);

    $.post(studioSaveUrl, JSON.stringify({
      title,
      flashcards: flashcardsArray,
      styling,
    })).done(() => {
      runtime.notify('save', { state: 'end' });
    });
  };

  return (
    <div className="xblock-flashcards xblock--flashcards--editor editor-with-buttons">
      <div className="d-flex flex-column" style={{ height: '375px' }}>
        <div className="d-flex flex-column overflow-auto m-2.5">
          {step === ConfigPage.Styling && (<StylingPage styling={styling} setStyling={setStyling} />)}
          {step === ConfigPage.Editing && (
            <EditingPage
              title={title}
              setTitle={setTitle}
              flashcards={flashcards}
              setFlashcards={setFlashcards}
              styling={styling}
            />
          )}
        </div>

        <div className="xblock-actions">
          <ul className="action-buttons">
            {step === ConfigPage.Styling ? (
              <ActionButtonLink
                onClick={() => setStep(ConfigPage.Editing)}
                className="continue-button"
                label="Continue"
              />
            ) : (
              <ActionButtonLink
                onClick={() => setStep(ConfigPage.Styling)}
                className="continue-button"
                label="Back"
              />
            )}
            <ActionButtonLink
              onClick={handleSave}
              className="save-button"
              label="Save"
            />

            <li className="action-item">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                href="#"
                className="button cancel-button"
                onClick={() => runtime.notify('cancel', {})}
              >Cancel
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
