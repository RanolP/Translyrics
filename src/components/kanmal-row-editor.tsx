import { KanmalRow } from '../lib/kanmal/row.js';
import { KanmalKanEditor } from './kanmal-kan-editor.js';

export interface KanmalRowEditorProps {
  row: KanmalRow;
}

export function KanmalRowEditor({ row }: KanmalRowEditorProps): JSX.Element {
  return (
    <span>
      {row.kanList.map((kan) => (
        <KanmalKanEditor key={kan.id} kan={kan} />
      ))}
    </span>
  );
}
