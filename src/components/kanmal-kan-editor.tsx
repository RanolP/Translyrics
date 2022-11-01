import { styled } from '@linaria/react';
import { KanmalKan } from '../lib/kanmal/kan.js';

const KanWrap = styled.span`
  outline: 2px solid red;
  margin: 1px;
  padding: 0.2rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: 2rem;
  width: calc(var(--size) * (2rem + 2px) - 2px);

  [data-small] > & {
    height: calc(2rem * 0.7);
    font-size: 0.7rem;
  }
`;

export interface KanmalKanEditorProps {
  kan: KanmalKan;
}

export function KanmalKanEditor({ kan }: KanmalKanEditorProps): JSX.Element {
  return <KanWrap style={{ '--size': kan.size ?? 1 }}>{kan.text}</KanWrap>;
}
