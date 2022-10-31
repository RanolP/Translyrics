import { KanmalKanGroup } from './kan-group.js';

export interface KanmalLine {
  readonly id: string;
  readonly groupList: KanmalKanGroup[];
}
