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
            small: true,
            kanList: [
              {
                id: nanoid(10),
                text: 'な',
                size: 1,
              },
              {
                id: nanoid(10),
                text: 'ん',
                size: 1,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '何',
                size: 2,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '나',
                size: 1,
              },
              {
                id: nanoid(10),
                text: 'ㄴ',
                size: 1,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '텅',
                size: 2,
              },
            ],
          },
        },
        {
          id: nanoid(10),
          [Representation.JapaneseKana]: {
            id: nanoid(10),
            language: Language.Japanese,
            small: true,
            kanList: [
              {
                id: nanoid(10),
                text: '\u00A0',
                size: 1,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: 'も',
                size: 1,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '모',
                size: 1,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '텅',
                size: 1,
              },
            ],
          },
        },
        {
          id: nanoid(10),
          [Representation.JapaneseKana]: {
            id: nanoid(10),
            language: Language.Japanese,
            small: true,
            kanList: [
              {
                id: nanoid(10),
                text: '\u00A0',
                size: 2,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: 'ない',
                size: 2,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '나이',
                size: 2,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '빈',
                size: 2,
              },
            ],
          },
        },
        {
          id: nanoid(10),
          [Representation.JapaneseKana]: {
            id: nanoid(10),
            language: Language.Japanese,
            small: true,
            kanList: [
              {
                id: nanoid(10),
                text: 'す',
                size: 1,
              },
              {
                id: nanoid(10),
                text: 'な',
                size: 1,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '砂',
                size: 2,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '스',
                size: 1,
              },
              {
                id: nanoid(10),
                text: '나',
                size: 1,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '모',
                size: 1,
              },
              {
                id: nanoid(10),
                text: '래',
                size: 1,
              },
            ],
          },
        },
        {
          id: nanoid(10),
          [Representation.JapaneseKana]: {
            id: nanoid(10),
            language: Language.Japanese,
            small: true,
            kanList: [
              {
                id: nanoid(10),
                text: 'ば',
                size: 1,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '場',
                size: 1,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '바',
                size: 1,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '밭',
                size: 1,
              },
            ],
          },
        },
        {
          id: nanoid(10),
          [Representation.JapaneseKana]: {
            id: nanoid(10),
            language: Language.Japanese,
            small: true,
            kanList: [
              {
                id: nanoid(10),
                text: 'と',
                size: 1,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '飛',
                size: 1,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '토',
                size: 1,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '울',
                size: 1,
              },
            ],
          },
        },
        {
          id: nanoid(10),
          [Representation.JapaneseKana]: {
            id: nanoid(10),
            language: Language.Japanese,
            small: true,
            kanList: [
              {
                id: nanoid(10),
                text: '\u00A0',
                size: 1,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: 'び',
                size: 1,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '비',
                size: 1,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '려',
                size: 1,
              },
            ],
          },
        },
        {
          id: nanoid(10),
          [Representation.JapaneseKana]: {
            id: nanoid(10),
            language: Language.Japanese,
            small: true,
            kanList: [
              {
                id: nanoid(10),
                text: 'か',
                size: 1,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '交',
                size: 1,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '카',
                size: 1,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '대',
                size: 1,
              },
            ],
          },
        },
        {
          id: nanoid(10),
          [Representation.JapaneseKana]: {
            id: nanoid(10),
            language: Language.Japanese,
            small: true,
            kanList: [
              {
                id: nanoid(10),
                text: '\u00A0',
                size: 1,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: 'う',
                size: 1,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '우',
                size: 1,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '는',
                size: 1,
              },
            ],
          },
        },
        {
          id: nanoid(10),
          [Representation.JapaneseKana]: {
            id: nanoid(10),
            language: Language.Japanese,
            small: true,
            kanList: [
              {
                id: nanoid(10),
                text: 'ら',
                size: 1,
              },
              {
                id: nanoid(10),
                text: 'い',
                size: 1,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '雷',
                size: 2,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '라',
                size: 1,
              },
              {
                id: nanoid(10),
                text: '이',
                size: 1,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '우',
                size: 2,
              },
            ],
          },
        },
        {
          id: nanoid(10),
          [Representation.JapaneseKana]: {
            id: nanoid(10),
            language: Language.Japanese,
            small: true,
            kanList: [
              {
                id: nanoid(10),
                text: 'め',
                size: 1,
              },
              {
                id: nanoid(10),
                text: 'い',
                size: 1,
              },
            ],
          },
          [Representation.Japanese]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '鳴',
                size: 2,
              },
            ],
          },
          [Representation.JapaneseHangul]: {
            id: nanoid(10),
            language: Language.Japanese,
            kanList: [
              {
                id: nanoid(10),
                text: '메',
                size: 1,
              },
              {
                id: nanoid(10),
                text: '이',
                size: 1,
              },
            ],
          },
          [Representation.Korean]: {
            id: nanoid(10),
            language: Language.Korean,
            kanList: [
              {
                id: nanoid(10),
                text: '레',
                size: 2,
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
