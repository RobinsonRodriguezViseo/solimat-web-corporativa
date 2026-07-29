import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { isExternalHttpLink, isInternalRoute } from '../../../utils/linkType';

export type ButtonVariant = 'solid' | 'ghost' | 'soft';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function buildClassName(variant: ButtonVariant, size: ButtonSize, block: boolean, className?: string): string {
  const classes = ['btn'];
  if (variant !== 'solid') classes.push(`btn--${variant}`);
  if (size !== 'md') classes.push(`btn--${size}`);
  if (block) classes.push('btn--block');
  if (className) classes.push(className);
  return classes.join(' ');
}

export default function Button(props: ButtonProps) {
  const { variant = 'solid', size = 'md', block = false, className, children, ...rest } = props;
  const finalClassName = buildClassName(variant, size, block, className);

  if (typeof props.href === 'string') {
    const { href, ...anchorRest } = rest as Omit<LinkButtonProps, keyof CommonProps>;

    if (isInternalRoute(href)) {
      return (
        <Link className={finalClassName} to={href} {...anchorRest}>
          {children}
        </Link>
      );
    }

    const externalProps = isExternalHttpLink(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
      <a className={finalClassName} href={href} {...externalProps} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonRest } = rest as Omit<NativeButtonProps, keyof CommonProps>;

  return (
    <button className={finalClassName} type={type} {...buttonRest}>
      {children}
    </button>
  );
}
