import * as React from 'react';
import ReactSwitch from 'react-switch';
import styled from 'styled-components/macro';

type Props = {
  className?: string;
  checked: boolean;
  onChange: () => void;
};

const Switch = ({ className, checked, onChange }: Props) => {
  return (
    <SwitchRoot className={className}>
      <ReactSwitch
        checked={checked}
        onChange={onChange}
        handleDiameter={20}
        height={14}
        width={32}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        onHandleColor="#04CE00"
        offHandleColor="#FFFFFF"
        onColor="#04CE00"
        offColor="#BBBBBB"
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </SwitchRoot>
  );
};

export default Switch;

const SwitchRoot = styled.div`
  line-height: 0;
  & .react-switch-bg {
    opacity: 0.5;
  }
`;
