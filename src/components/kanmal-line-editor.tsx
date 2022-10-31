import { KanmalLine } from '../lib/kanmal/line.js';
import { KanmalKanGroupEditor } from './kanmal-kan-group-editor.js';

export interface KanmalLineEditorProps {
  line: KanmalLine;
}

export function KanmalLineEditor({ line }: KanmalLineEditorProps): JSX.Element {
  return <p>
    {line.groupList.map((kanGroup) => (
      <KanmalKanGroupEditor key={kanGroup.id} kanGroup={kanGroup}/>
    ))}
  </p>;
}
