import { styled } from '@linaria/react';
import { KanmalKan } from '../lib/kanmal/kan.js';

const KanWrap = styled.span`
  border: 1px solid red;
`;

export interface KanmalKanEditorProps {
  kan: KanmalKan;
}

export function KanmalKanEditor({ kan }: KanmalKanEditorProps): JSX.Element {
  return <KanWrap>{kan.text}</KanWrap>;
}
