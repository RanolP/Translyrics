import { Language } from './language.js';
import { KanmalLine } from './line.js';

export interface KanmalDocument {
  readonly title: Partial<Record<Language, string>>;
  readonly lineList: KanmalLine[];
}
