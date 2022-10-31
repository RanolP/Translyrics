import { ComponentChildren } from 'preact';
import { usePageContext } from './usePageContext';

export function Link(props: {
  href: string;
  className?: string;
  children: ComponentChildren;
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
