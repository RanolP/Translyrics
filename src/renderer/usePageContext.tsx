// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { ComponentChildren, createContext } from 'preact';
import { useContext } from 'preact/hooks';
import type { PageContext } from './types.js';

export { PageContextProvider };
export { usePageContext };

const Context = createContext<PageContext>(undefined as any);

function PageContextProvider({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: ComponentChildren;
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

function usePageContext() {
  const pageContext = useContext(Context);
  return pageContext;
}
