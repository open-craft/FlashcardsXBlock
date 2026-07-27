/// <reference types="vite/client" />
/// <reference path="./react-inert.d.ts" />
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

type XBlockElementLike = Element | { readonly 0: Element; readonly jquery: string };

interface XBlockRuntime {
  handlerUrl: (element: XBlockElementLike | null, action: string) => string
  notify: (action: string, data: object) => void
}

interface XBlockData {
  title: string,
  flashcards: Flashcard[],
  styling: FlashcardStyling,
}
