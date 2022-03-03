import * as React from 'react';
import styled from 'styled-components/macro';
import BorderButton from './BorderButton';
import useFocusGroup from '../utils/useFocusGroup';
import { ReactComponent as LockIcon } from '../icons/SolidLock.svg';
import styledOmitProps from '../utils/styledOmitProps';
import mobileMedia from '../utils/mobileMedia';

export type Props<T> = {
  value: T | undefined;
  onChange: (gender: T) => void;
  id: string;
  variants: Array<{ label: React.ReactNode; value: T; locked?: boolean }>;
  className?: string;
  onLockedClick?: (value: T) => void;
  layout?: 'horizontal' | 'vertical';
  buttonTheme?: 'outline' | 'solid';
  size?: 'small';
  disabled?: boolean;
};

const RadioButtonSelector = <T extends string>(props: Props<T>) => {
  const {
    value,
    onChange,
    id,
    variants,
    className,
    layout = 'vertical',
    buttonTheme = 'solid',
    size,
    disabled
  } = props;
  const ulRef = React.useRef<HTMLUListElement>(null);

  useFocusGroup(
    {
      getGroupElements: () => {
        return ulRef.current ? ulRef.current.querySelectorAll('li') : [];
      },
      options: {
        keybindings: {
          next: { key: layout === 'horizontal' ? 'ArrowRight' : 'ArrowDown' },
          prev: { key: layout === 'horizontal' ? 'ArrowLeft' : 'ArrowUp' }
        }
      }
    },
    [ulRef]
  );

  const Button = buttonTheme === 'outline' ? OutlineRadioButton : RadioButton;

  return (
    <RadioButtonSelectorRoot
      className={className}
      ref={ulRef}
      role="radiogroup"
      layout={layout}
      aria-activedescendant={value && `${id}-${value}`}
    >
      {variants.map((variant, idx) => {
        return (
          <Button
            size={size}
            layout={layout}
            id={`${id}-${variant.value}`}
            key={variant.value}
            role="radio"
            aria-checked={variant.value === value}
            active={variant.value === value}
            disabled={disabled}
            onClick={() => {
              if (disabled) return;
              if (variant.locked) {
                if (props.onLockedClick) {
                  props.onLockedClick(variant.value);
                }
              } else {
                onChange(variant.value);
              }
            }}
            onKeyDown={e => {
              if (disabled) return;
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (variant.locked) {
                  if (props.onLockedClick) {
                    props.onLockedClick(variant.value);
                  }
                } else {
                  onChange(variant.value);
                }
              }
            }}
            tabIndex={variant.value === value || (!value && idx === 0) ? 0 : -1}
          >
            {variant.locked && <Lock />}
            {variant.label}
          </Button>
        );
      })}
    </RadioButtonSelectorRoot>
  );
};

export default RadioButtonSelector;

const LiButton = (p: React.ComponentProps<typeof BorderButton>) => (
  <BorderButton as="li" {...p} />
);

const RadioButtonSelectorRoot = styledOmitProps<
  { layout: 'horizontal' | 'vertical' },
  'ul'
>('ul', ['layout'])`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: ${p => (p.layout === 'horizontal' ? 'flex' : 'block')};
  justify-content: space-around;
`;

const RadioButton = styledOmitProps<
  {
    layout: 'horizontal' | 'vertical';
  },
  typeof LiButton
>(LiButton, ['layout'])`
  position: relative;

  margin-top: ${p => (p.layout === 'horizontal' ? 0 : '16px')};
  & + & {
    margin-left: ${p => (p.layout === 'horizontal' ? '8px' : 0)};
  }

  &:focus {
    outline: none;
  }

  &.focus-visible:focus {
    box-shadow: 0 0 2px 2px ${p => p.theme.outlineColor};
  }

  ${mobileMedia`
    & + & {
      margin-left: ${p => (p.layout === 'horizontal' ? '4px' : 0)};;
    }
  `}
`;

const OutlineRadioButton = styled(RadioButton)`
  opacity: ${p => (p.active ? 1 : 0.5)};
  border: 1px solid
    ${p =>
      p.active
        ? p.disabled
          ? p.theme.dimmedFgColor
          : p.theme.fgColor
        : 'transparent'};
  background: transparent;
  color: ${p => (p.disabled ? p.theme.dimmedFgColor : p.theme.fgColor)};
  padding: 0 20px;

  &:hover {
    border-color: ${p => p.theme.fgColor};
    opacity: 1;
  }
`;

const Lock = styled(LockIcon)`
  position: absolute;
  left: 24px;
  top: 13px;
  color: ${p => p.theme.fgColor};
  opacity: 0.4;
`;
