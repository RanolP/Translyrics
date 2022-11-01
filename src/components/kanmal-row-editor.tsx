import { styled } from '@linaria/react';
import { KanmalRow } from '../lib/kanmal/row.js';
import { KanmalKanEditor } from './kanmal-kan-editor.js';

const Wrap = styled.span``;

export interface KanmalRowEditorProps {
  row: KanmalRow;
}

export function KanmalRowEditor({ row }: KanmalRowEditorProps): JSX.Element {
  return (
    <Wrap data-small={row.small}>
      {row.kanList.map((kan) => (
        <KanmalKanEditor key={kan.id} kan={kan} />
      ))}
    </Wrap>
  );
}
