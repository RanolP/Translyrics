import { hydrate } from 'preact';
import { PageShell } from './PageShell.js';
import type { PageContextClient } from './types.js';

export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;
  hydrate(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    document.getElementById('page-view')!,
  );
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
