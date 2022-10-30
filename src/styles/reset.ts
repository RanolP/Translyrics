import { css } from '@linaria/core';

export const Reset = css`
  :global() {
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
    }
  }
`;
