import { KanMark } from './kan-mark.js';

export interface KanmalKan {
  readonly id: string;
  readonly text: string;
  readonly size?: number;
  readonly small?: true;
  readonly marks?: KanMark[];
}
