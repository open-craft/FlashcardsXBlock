import * as React from 'react';
import {
  useEffect, useMemo, useRef, useState,
} from 'react';
import { Button, Icon } from '@openedx/paragon';
import {
  FlipToBack, ChevronLeft, ChevronRight, Shuffle,
} from '@openedx/paragon/icons';

interface StudentUiProps {
  title: string,
  flashcards: Flashcard[],
  styling: FlashcardStyling,
}

function htmlToText(html: string): string {
  if (!html) {
    return '';
  }
  if (typeof document === 'undefined') {
    return html;
  }
  const container = document.createElement('div');
  container.innerHTML = html;
  return (container.textContent || '').replace(/\s+/g, ' ').trim();
}

function StudentUi({ title, flashcards, styling }: StudentUiProps) {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [shouldFocusCard, setShouldFocusCard] = useState(false);
  const [shuffledFlashcards, setShuffledFlashcards] = useState(flashcards);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const announcementText = useMemo(() => {
    if (!isStarted || currentIndex < 0 || currentIndex >= shuffledFlashcards.length) {
      return '';
    }

    const currentFlashcard = shuffledFlashcards[currentIndex];
    if (!currentFlashcard) {
      return '';
    }

    const total = shuffledFlashcards.length;
    const sideLabel = isFlipped ? 'Answer' : 'Question';
    const visibleHtml = isFlipped ? currentFlashcard.back : currentFlashcard.front;
    const visibleText = htmlToText(visibleHtml);
    return `Card ${currentIndex + 1} of ${total}. ${sideLabel}.${visibleText ? ` ${visibleText}` : ''}`;
  }, [currentIndex, isFlipped, isStarted, shuffledFlashcards]);

  const shuffleArray = (array: Flashcard[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleStart = () => {
    setShouldFocusCard(true);
    setIsStarted(true);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleShuffle = () => {
    const shuffled = shuffleArray(flashcards);
    setShuffledFlashcards(shuffled);
    if (isStarted) {
      setShouldFocusCard(true);
      setCurrentIndex(0);
      setIsFlipped(false);
    }
  };

  const navigateTo = (newIndex: number) => {
    setShouldFocusCard(true);
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

  useEffect(() => {
    if (!isStarted || !shouldFocusCard) {
      return;
    }

    const el = cardRef.current;
    if (!el) {
      return;
    }

    try {
      el.focus({ preventScroll: true });
    } catch (e) {
      el.focus();
    } finally {
      setShouldFocusCard(false);
    }
  }, [currentIndex, isStarted, shouldFocusCard]);

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
      <div className="visually-hidden" role="status" aria-atomic="true" aria-label="Flashcard announcement">
        {announcementText}
      </div>
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
          ref={cardRef}
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
