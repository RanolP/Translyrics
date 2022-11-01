import { KanmalKan } from './kan.js';
import { Language } from './language.js';

export interface KanmalRow {
  readonly id: string;
  readonly language: Language;
  readonly kanList: KanmalKan[];
  readonly small?: true;
}
