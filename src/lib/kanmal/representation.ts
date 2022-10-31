export const Representation = Object.freeze({
  Korean: 'Korean',
  English: 'English',
  Japanese: 'Japanese',
  JapaneseKana: 'JapaneseKana',
  JapaneseHangul: 'JapaneseHangul',
} as const);

export type Representation = typeof Representation[keyof typeof Representation];
