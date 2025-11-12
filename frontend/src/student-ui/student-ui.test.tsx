import React from 'react';
import {
  beforeEach, describe, expect, it, vi,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import StudentUi from './student-ui';

describe('StudentUi', () => {
  let props;

  beforeEach(() => {
    props = {
      title: 'Test Flashcard Deck',
      flashcards: [
        {
          front: 'Question 1',
          back: 'Answer 1',
        },
        {
          front: 'Question 2',
          back: 'Answer 2',
        },
        {
          front: 'Question 3',
          back: 'Answer 3',
        },
      ],
      styling: {
        borderColor: '#123123',
        backgroundColor: '#456456',
        textColor: '#789789',
        fontSize: '20px',
      },
    };
  });

  it('starts the flashcard deck and shows first card', async () => {
    render(<StudentUi {...props} />);
    expect(screen.getByText('Test Flashcard Deck')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Start flashcard deck' }));

    expect(screen.getByText('Question 1')).toBeInTheDocument();

    const flashcard = screen.getByRole('button', { name: /Flashcard/ });
    expect(flashcard).not.toHaveClass('is-flipped');
  });

  it('can flip flashcard to show answer', async () => {
    render(<StudentUi {...props} />);
    await userEvent.click(screen.getByRole('button', { name: 'Start flashcard deck' }));

    expect(screen.getByText('Question 1')).toBeInTheDocument();
    const flashcard = screen.getByRole('button', { name: /Flashcard/ });
    expect(flashcard).not.toHaveClass('is-flipped');

    await userEvent.click(flashcard);

    expect(flashcard).toHaveClass('is-flipped');
    expect(screen.getByText('Answer 1')).toBeInTheDocument();

    // The flip icon should be present on both sides.
    const flipIcons = flashcard.querySelectorAll('.fc-flip-icon');
    expect(flipIcons).toHaveLength(2);
  });

  it('can navigate through flashcards with side arrow buttons', async () => {
    render(<StudentUi {...props} />);
    await userEvent.click(screen.getByRole('button', { name: 'Start flashcard deck' }));

    screen.getByText('Question 1');
    const counter1 = screen.getByRole('status', { name: 'Flashcard counter' });
    expect(counter1?.textContent).toBe('1 / 3');

    const prevBtn = screen.getByRole('button', { name: 'Previous card' });
    const nextBtn = screen.getByRole('button', { name: 'Next card' });

    // Previous button should be disabled on first card
    expect(prevBtn).toBeDisabled();
    expect(nextBtn).not.toBeDisabled();

    await userEvent.click(nextBtn);
    expect(screen.getByText('Question 2')).toBeInTheDocument();
    const counter2 = screen.getByRole('status', { name: 'Flashcard counter' });
    expect(counter2?.textContent).toBe('2 / 3');

    // Both buttons should be enabled on middle card
    expect(prevBtn).not.toBeDisabled();
    expect(nextBtn).not.toBeDisabled();

    await userEvent.click(nextBtn);
    expect(screen.getByText('Question 3')).toBeInTheDocument();
    const counter3 = screen.getByRole('status', { name: 'Flashcard counter' });
    expect(counter3?.textContent).toBe('3 / 3');

    // Next button should be disabled on last card
    expect(prevBtn).not.toBeDisabled();
    expect(nextBtn).toBeDisabled();

    await userEvent.click(prevBtn);
    expect(screen.getByText('Question 2')).toBeInTheDocument();
    const counter4 = screen.getByRole('status', { name: 'Flashcard counter' });
    expect(counter4?.textContent).toBe('2 / 3');
  });

  it('applies the correct styles', async () => {
    render(<StudentUi {...props} />);
    await userEvent.click(screen.getByRole('button', { name: 'Start flashcard deck' }));

    const flashcard = screen.getByRole('button', { name: /Flashcard/ });
    if (flashcard) {
      expect(flashcard).toHaveStyle({ fontSize: props.styling.fontSize });
      expect(flashcard).toHaveStyle({ borderColor: props.styling.borderColor });
      expect(flashcard).toHaveStyle({ backgroundColor: props.styling.backgroundColor });
      expect(flashcard).toHaveStyle({ color: props.styling.textColor });
    }
  });

  it('shuffles the flashcards', async () => {
    // Keep the order deterministic.
    const originalRandom = Math.random;
    Math.random = vi.fn()
      .mockReturnValueOnce(0) // Swap the last element with the first.
      .mockReturnValueOnce(0.5); // Keep the second element in place.

    render(<StudentUi {...props} />);

    const shuffleBtn = screen.getByRole('button', { name: /shuffle/i });
    await userEvent.click(shuffleBtn);
    await userEvent.click(screen.getByRole('button', { name: 'Start flashcard deck' }));

    expect(screen.getByText('Question 3')).toBeInTheDocument();
    expect(screen.queryByText('Question 1')).not.toBeInTheDocument();

    const nextBtn = screen.getByRole('button', { name: 'Next card' });
    await userEvent.click(nextBtn);

    expect(screen.getByText('Question 2')).toBeInTheDocument();

    await userEvent.click(nextBtn);
    expect(screen.getByText('Question 1')).toBeInTheDocument();

    // Restore the original Math.random.
    Math.random = originalRandom;
  });
});
