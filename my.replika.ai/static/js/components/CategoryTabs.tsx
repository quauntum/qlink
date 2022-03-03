import * as React from 'react';
import styled from 'styled-components/macro';
import useFocusGroup from '../utils/useFocusGroup';

type Category<T extends string> = {
  value: T;
  label?: string;
  hasNewItems?: boolean;
};

type Props<T extends string> = {
  className?: string;
  selected: string | null;
  categories: Category<T>[];
  setCategory?: (categoryTitle: string) => void;
};

function toSnakeCase(str: string) {
  return str.replace(/ /g, '_').toLowerCase();
}

const CategoryTabs = <T extends string>(props: Props<T>) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useFocusGroup(
    {
      getGroupElements: () => {
        if (ref.current) {
          return ref.current.childNodes;
        }

        return [];
      },
      options: {
        keybindings: {
          next: { key: 'ArrowRight' },
          prev: { key: 'ArrowLeft' },
        },
        wrap: true,
      },
    },
    [ref.current]
  );

  const selected = props.selected ?? props.categories[0]?.value;

  return (
    <CategoryRoot
      role="tablist"
      data-testid="categories"
      ref={ref}
      className={props.className}
    >
      {props.categories.map((cat) => (
        <CategoryTab
          data-hasnewitems={cat.hasNewItems}
          role="tab"
          data-testid={`category-${toSnakeCase(cat.value)}`}
          aria-selected={selected === cat.value}
          tabIndex={selected === cat.value ? 0 : -1}
          key={cat.value}
          onClick={() => {
            if (props.setCategory) {
              props.setCategory(cat.value);
            }
          }}
          onFocus={(e) => {
            e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }}
        >
          {cat.label ?? cat.value}
        </CategoryTab>
      ))}
    </CategoryRoot>
  );
};

export default CategoryTabs;

const CategoryRoot = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  min-width: 70%;
  margin: 13px auto 18px;
  padding: 0 8px;
  max-width: 100%;
  overflow-x: scroll;
  padding: 2px;
`;

const CategoryTab = styled.button`
  min-height: 20px;
  padding: 0 1px 5px;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  border: 0;
  color: ${(p) => p.theme.fgColor};
  background: transparent;
  border-bottom: 2px solid
    ${(p) => (p['aria-selected'] ? p.theme.fgColor : 'transparent')};
  opacity: ${(p) => (p['aria-selected'] ? 1 : 0.4)};
  transition: opacity 0.25s ease-out;
  text-transform: uppercase;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  & + & {
    margin-left: 18px;
  }

  &:after {
    display: ${(p) => (!p['data-hasnewitems'] ? 'none' : 'block')};
    content: '';
    position: absolute;
    z-index: 1;
    top: -2px;
    right: -10px;
    width: 6px;
    height: 6px;
    background-color: ${(p) => p.theme.newItemBgColor};
    border-radius: 100%;
  }
`;
