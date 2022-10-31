import { Kan } from './kan.js';
import { Language } from './language.js';
import { Representation } from './representation.js';

export type KanmalKanGroup = {
  [repr in Representation]: {
    language: Language;
    kanList: Kan[];
  };
};
