import * as React from 'react';
import styledOmitProps from '../utils/styledOmitProps';

const ErrorSuccessMessage = ({
  hasError,
  scrollIntoView,
  children,
  ...rest
}: {
  hasError: boolean;
  scrollIntoView?: boolean;
  children: React.ReactNode;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (hasError && scrollIntoView && children && ref.current) {
      ref.current.scrollIntoView();
    }
  }, [hasError, scrollIntoView, children, ref]);
  return (
    <ErrorSuccessMessageRoot ref={ref} hasError={hasError} {...rest}>
      {children}
    </ErrorSuccessMessageRoot>
  );
};

export default ErrorSuccessMessage;

const ErrorSuccessMessageRoot = styledOmitProps<{
  hasError?: boolean;
}>('div', ['hasError'])`
  margin-top: 0;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: left;
  color: ${(p) =>
    p.hasError ? p.theme.errorLightFgColor : p.theme.dimmedFgColor};
  font-size: 16px;
  max-height: 0px;
  transition: max-height 0.2s ease-out, margin-top 0.2s ease-out;

  &:not(:empty) {
    margin-top: 20px;
    max-height: 100px;
  }
`;
