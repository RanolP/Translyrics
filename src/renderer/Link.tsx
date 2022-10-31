import { ReactNode } from 'react';
import { usePageContext } from './usePageContext.js';

export function Link(props: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const pageContext = usePageContext();
  const className = [
    props.className,
    pageContext.urlPathname === props.href && 'is-active',
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <a
      {...props}
      className={className}
      href={import.meta.env.BASE_URL + props.href.slice(1)}
    />
  );
}
