import type { ElementType, HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  children: ReactNode;
}

export default function Container({ as: Tag = 'div', className, children, ...rest }: ContainerProps) {
  const finalClassName = className ? `container ${className}` : 'container';

  return (
    <Tag className={finalClassName} {...rest}>
      {children}
    </Tag>
  );
}
