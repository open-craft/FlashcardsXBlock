import * as React from 'react';
import { useState } from 'react';
import { Button, Icon } from '@openedx/paragon';
import {
  FlipToBack, ChevronLeft, ChevronRight, Shuffle,
} from '@openedx/paragon/icons';

interface StudentUiProps {
  title: string,
  flashcards: Flashcard[],
  styling: FlashcardStyling,
}

function StudentUi({ title, flashcards, styling }: StudentUiProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [shuffledFlashcards, setShuffledFlashcards] = useState(flashcards);

  const shuffleArray = (array: Flashcard[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleStart = () => {
    setIsStarted(true);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleShuffle = () => {
    const shuffled = shuffleArray(flashcards);
    setShuffledFlashcards(shuffled);
    if (isStarted) {
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  const navigateTo = (newIndex: number) => {
    // Prevent flipping the card while navigating.
    setIsNavigating(true);
    setIsFlipped(false);
    setCurrentIndex(newIndex);
    // Reset navigation state once the card is changed.
    setTimeout(() => setIsNavigating(false), 50);
  };

  const handleNext = () => {
    if (currentIndex < shuffledFlashcards.length - 1) {
      navigateTo(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      navigateTo(currentIndex - 1);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (!isStarted) {
    return (
      <div className="flashcards_block">
        <div className="fc-number" aria-label="Flashcard counter" role="status">
          0 / <span className="fc-total">{shuffledFlashcards.length}</span>
        </div>
        <div
          className="fc-title"
          aria-label="Flashcard deck title"
        >
          {title}
        </div>
        <hr />
        <div className="fc-start-controls">
          <Button
            className="shuffle-btn"
            onClick={handleShuffle}
            variant="outline-primary"
          >
            <Icon src={Shuffle} size="sm" />
            Shuffle
          </Button>
          <Button
            className="start-btn"
            onClick={handleStart}
            aria-label="Start flashcard deck"
          >
            START
          </Button>
        </div>
      </div>
    );
  }

  const currentFlashcard = shuffledFlashcards[currentIndex];

  return (
    <div className="flashcards_block">
      <div className="fc-number" aria-label="Flashcard counter" role="status">
        <span className="current-fc">{currentIndex + 1}</span> / <span className="fc-total">{shuffledFlashcards.length}</span>
      </div>
      <div
        className="fc-title"
        aria-label="Flashcard deck title"
      >
        {title}
      </div>
      <hr />
      <div className="fc-container">
        <Button
          className="nav-btn prev-btn"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          variant="light"
          aria-label="Previous card"
        >
          <Icon src={ChevronLeft} size="sm" />
        </Button>
        <div
          className={`fc-card ${isFlipped ? 'is-flipped' : ''} ${isNavigating ? 'is-navigating' : ''}`}
          onClick={handleFlip}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleFlip();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Flashcard ${currentIndex + 1} of ${shuffledFlashcards.length}. Click to flip.`}
        >
          <div
            className="fc-card-front"
            style={{
              borderColor: styling.borderColor,
              backgroundColor: styling.backgroundColor,
            }}
          >
            <div className="fc-flip-icon">
              <Icon src={FlipToBack} size="sm" />
            </div>
            <p className="label" style={{ color: styling.textColor }}>Question</p>
            <div
              className="card-content"
              style={{
                color: styling.textColor,
                fontSize: styling.fontSize,
              }}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: currentFlashcard.front }}
            />
          </div>
          <div
            className="fc-card-back"
            style={{
              borderColor: styling.borderColor,
              backgroundColor: styling.backgroundColor,
            }}
          >
            <div className="fc-flip-icon">
              <Icon src={FlipToBack} size="sm" />
            </div>
            <p className="label" style={{ color: styling.textColor }}>Answer</p>
            <div
              className="card-content"
              style={{
                color: styling.textColor,
                fontSize: styling.fontSize,
              }}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: currentFlashcard.back }}
            />
          </div>
        </div>
        <Button
          className="nav-btn next-btn"
          onClick={handleNext}
          disabled={currentIndex === shuffledFlashcards.length - 1}
          variant="light"
          aria-label="Next card"
        >
          <Icon src={ChevronRight} size="sm" />
        </Button>
      </div>
    </div>
  );
}

export default StudentUi;
