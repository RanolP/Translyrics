import { KanmalDocument } from '../lib/kanmal/document.js';
import { Language } from '../lib/kanmal/language.js';
import { KanmalLineEditor } from './kanmal-line-editor.js';
import { styled } from '@linaria/react';

const DocumentWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: 
    'title'
    'line-list';
`;

const Title = styled.h1`
  grid-area: title;
`;

const LineList = styled.div`
  grid-area: line-list;
`;

export interface KanmalDocumentEditorProps {
  document: KanmalDocument;
}

export function KanmalDocumentEditor({
  document,
}: KanmalDocumentEditorProps): JSX.Element {
  return (
    <DocumentWrap>
      <Title>{document.title[Language.Korean]}</Title>
      <LineList>
        {document.lineList.map((line) => (
          <KanmalLineEditor key={line.id} line={line} />
        ))}
      </LineList>
    </DocumentWrap>
  );
}
