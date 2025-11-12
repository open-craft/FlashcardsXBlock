import * as React from 'react';
import { ColorPicker } from '@openedx/paragon';

interface StylingPageProps {
  styling: FlashcardStyling
  setStyling: (param: FlashcardStyling) => void
}

interface ColorSelectorProps {
  label:string
  color: string | undefined
  setColor: (val:string) => void
  help: string
}

function ColorSelector({
  label, color, setColor, help,
}:ColorSelectorProps) {
  return (
    <div className="d-flex flex-column pb-3">
      <div className="d-flex align-items-center" data-testid={label}>
        <span className="mr-2">{label}</span>
        <ColorPicker
          size="sm"
          color={color}
          setColor={setColor}
        />
      </div>
      <span className="text-light-800 small mt-2">{help}</span>
    </div>
  );
}

export default function StylingPage({
  styling,
  setStyling,
}: StylingPageProps) {
  const updateStyling = (changes: Partial<FlashcardStyling>) => setStyling({ ...styling, ...changes });
  return (
    <div style={{ maxWidth: '800px' }}>
      <h3 className="mb-2 h3">Styling of Flashcards</h3>
      <div className="d-flex align-items-center mb-2">
        <label className="mr-2" htmlFor="font-size-input">Font size</label>
        <input
          id="font-size-input"
          value={styling.fontSize}
          onChange={(e) => updateStyling({ fontSize: e.target.value })}
          placeholder="e.g., 16px, 1.2em"
        />
      </div>

      <ColorSelector
        label="Background color"
        help="Background color of flashcard cards"
        color={styling.backgroundColor}
        setColor={(value) => updateStyling({ backgroundColor: value })}
      />
      <ColorSelector
        label="Border color"
        help="Border color of flashcard cards"
        color={styling.borderColor}
        setColor={(value) => updateStyling({ borderColor: value })}
      />
      <ColorSelector
        label="Text color"
        help="Text color of flashcard content"
        color={styling.textColor}
        setColor={(value) => updateStyling({ textColor: value })}
      />
    </div>
  );
}
