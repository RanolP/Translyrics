import { KanmalDocumentEditor } from '../../components/kanmal-document-editor.js';
import { KanmalDocument } from '../../lib/kanmal/document.js';
import { Language } from '../../lib/kanmal/language.js';
import { nanoid } from 'nanoid';
import { Representation } from '../../lib/kanmal/representation.js';

const document: KanmalDocument = {
  title: {
    [Language.Korean]: '모래 행성',
  },
  lineList: [
    {
      id: nanoid(10),
      groupList: [
        {
          id: nanoid(10),
          [Representation.JapaneseKana]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: 'なんもないすなばとびかうらいめい',
                size: 10,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '何もない砂場飛び交う雷鳴',
                size: 10,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '난모나이스나바토비카우라이메이',
                size: 10,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '텅텅 빈 모래밭 울려대는 우레',
                size: 10,
              },
            ],
          },
        },
      ],
    },
  ],
};

export function Page() {
  return (
    <>
      <KanmalDocumentEditor document={document} />
    </>
  );
}
