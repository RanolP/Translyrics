export const Language = Object.freeze({
  AmericanEnglish: 'en-US',
  Korean: 'ko-KR',
  Japanese: 'ja-JP',
} as const);

export type Language = typeof Language[keyof typeof Language];
