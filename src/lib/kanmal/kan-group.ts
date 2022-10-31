import { Representation } from './representation.js';
import { KanmalRow } from './row.js';

export interface KanmalKanGroup
  extends Partial<{
    readonly [repr in Representation]: KanmalRow;
  }> {
  readonly id: string;
}
