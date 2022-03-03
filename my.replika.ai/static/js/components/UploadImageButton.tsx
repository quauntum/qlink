import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as ImageIcon } from '../icons/ImageIcon.svg';

type Props = {
  onUpload: (files: File[]) => void;
  className?: string;
  disabled?: boolean;
  id: string;
  'data-testid': string;
  children?: React.ReactNode;
};

const FileInputLabel = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  cursor: pointer;
`;

const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  &:focus + label {
    outline-color: ${p => p.theme.outlineColor};
    outline-style: auto;
    outline-width: 5px;
  }
`;

const StyledImageIcon = styled(ImageIcon)`
  width: 100%;
  height: 100%;
  z-index: 0;
  transition: color 0.2s ease-out;
`;

const UploadImageButtonRoot = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const filterImageFiles = (files: FileList | null) =>
  files ? Array.from(files).filter((f: File) => /^image\//.test(f.type)) : [];

const UploadImageButton = ({
  className,
  onUpload,
  disabled,
  id,
  'data-testid': dataTestId,
  children
}: Props) => {
  return (
    <UploadImageButtonRoot
      role="button"
      className={className}
      data-testid={dataTestId}
    >
      <FileInput
        accept="image/*"
        type="file"
        name={id}
        id={id}
        onChange={e => onUpload(filterImageFiles(e.target.files))}
        disabled={disabled}
        aria-label="Send image to your Replika"
      />
      <FileInputLabel htmlFor={id} />
      {children ?? <StyledImageIcon />}
    </UploadImageButtonRoot>
  );
};

export default UploadImageButton;
