/// <reference types="vite/client" />
declare let $: JQueryStatic;

type Flashcard = {
  front: string;
  back: string;
};

type FlashcardStyling = {
  fontSize?: string,
  backgroundColor?: string,
  textColor?: string,
  borderColor?: string,
};

interface XBlockRuntime {
  handlerUrl: (element: Element | null, action: string) => string
  notify: (action: string, data: object) => void
}

interface XBlockData {
  title: string,
  flashcards: Flashcard[],
  styling: FlashcardStyling,
}
