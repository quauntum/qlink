import * as React from 'react';
import { omit } from 'lodash';
import styled, { ThemedStyledFunction } from 'styled-components/macro';
import { Theme } from '../types/theme';

type Result<P extends object, Q, R> = ThemedStyledFunction<
  React.ForwardRefExoticComponent<
    React.PropsWithoutRef<Q> & React.RefAttributes<R>
  >,
  Theme,
  P & Q
>;

/**
 * TODO: make Cmp type non-optional when https://github.com/Microsoft/TypeScript/pull/26349 is resolved
 * (and use it with `_` sigil: styledOmitProps<Props, _>)
 * This will allow partial type inference for component type
 */
export default function styledOmitProps<
  StyleProps extends object = {},
  Cmp extends React.ReactType<any> = 'div',
  RefProps = any,
  CmpProps = React.ComponentProps<Cmp>
>(
  cmp: Cmp,
  omittedProps: Array<keyof StyleProps>
): Result<StyleProps, CmpProps, RefProps> {
  const omittedPropsCmp = React.forwardRef<RefProps, CmpProps>((props, ref) => {
    const filteredProps = omit(props, omittedProps);
    return React.createElement(cmp, { ...filteredProps, ref });
  });

  return styled(omittedPropsCmp);
}
