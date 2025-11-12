import React from 'react';
import {
  describe, beforeEach, it, expect, vi, afterEach,
} from 'vitest';
import {
  act, cleanup, fireEvent, render, screen, within,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import StylingPage from './styling-page';

describe('StylingPage', () => {
  const mockSetStyling = vi.fn();

  const mockProps = {
    styling: {
      fontSize: '12px',
      backgroundColor: '#000000',
      borderColor: '#000000',
      textColor: '#000000',
    },
    setStyling: mockSetStyling,
  };

  beforeEach(() => {
    render(<StylingPage {...mockProps} />);
  });
  afterEach(() => {
    cleanup();
  });

  it('updates font size on change', async () => {
    fireEvent.change(screen.getByRole('textbox', { name: 'Font size' }), { target: { value: '16px' } });
    expect(mockSetStyling)
      .toHaveBeenCalledWith({
        ...mockProps.styling,
        fontSize: '16px',
      });
  });

  it.each([{ property: 'backgroundColor', label: 'Background color' }, { property: 'borderColor', label: 'Border color' }, { property: 'textColor', label: 'Text color' }])('updates $label on change', async ({ property, label }) => {
    const user = userEvent.setup();
    const colorPicker = within(screen.getByTestId(label)).getByRole('button');
    await act(async () => {
      await user.click(colorPicker);
    });
    const colorInput = screen.getByRole('textbox', {
      name: /hex/i,
    });
    await act(async () => {
      await user.clear(colorInput);
      await user.type(colorInput, '#456789');
    });
    expect(mockSetStyling)
      .toHaveBeenCalledWith({
        ...mockProps.styling,
        [property]: '#456789',
      });
  });
});
