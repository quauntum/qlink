import * as React from 'react';
import { Link } from 'react-router-dom';
import { pickBy } from 'lodash';
import AriaReadable from './AriaReadable';

type Props = {
  active?: boolean;
  label?: string;
  to?: string;
} & React.PropsWithoutRef<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

/**
 * Most basic a11y-friendly button component
 * NB: native 'disabled' attribute is omitted, otherwise the reader will ignore it completely
 * (instead of alerting user that there is a disabled button)
 */
export default ({
  children,
  label,
  active,
  disabled,
  onClick,
  to,
  className,
  style,
  ...rest
}: Props) => {
  const handleClick = (e) => {
    // we have to manage it manually since we omitted 'disabled' property
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  if (to) {
    return (
      <Link
        aria-disabled={!!disabled}
        onClick={handleClick}
        to={to}
        className={className}
        style={style}
        tabIndex={rest.tabIndex}
        {...(pickBy(rest, (val, key) => key.startsWith('data-')) as any)}
      >
        {label ? <AriaReadable>{label}</AriaReadable> : null}
        {children}
      </Link>
    );
  }

  return (
    <button
      aria-pressed={!!active}
      aria-disabled={!!disabled}
      onClick={handleClick}
      className={className}
      style={style}
      {...rest}
    >
      {label ? <AriaReadable>{label}</AriaReadable> : null}
      {children}
    </button>
  );
};
