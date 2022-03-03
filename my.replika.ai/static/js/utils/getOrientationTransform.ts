import { css } from 'styled-components/macro';

const getOrientationTransform = (
  orientation: number | undefined,
  ratio: number | null | undefined
) => {
  const normal = css`
    width: 100%;
    height: 100%;
  `;

  if (!ratio || !orientation) {
    return normal;
  }

  const rotated = css`
    width: ${100 / ratio + '%'};
    height: ${100 * ratio + '%'};
  `;

  switch (orientation) {
    case 2:
      return css`
        ${normal};
        transform: matrix(-1, 0, 0, 1, 0, 0);
      `;
    case 3:
      return css`
        ${normal};
        transform: matrix(-1, 0, 0, -1, 0, 0);
      `;
    case 4:
      return css`
        ${normal};
        transform: matrix(1, 0, 0, -1, 0, 0);
      `;
    case 5:
      return css`
        ${rotated};
        transform: matrix(0, 1, 1, 0, 0, 0);
      `;
    case 6:
      return css`
        ${rotated};
        transform: matrix(0, 1, -1, 0, 0, 0);
      `;
    case 7:
      return css`
        ${rotated};
        transform: matrix(0, -1, -1, 0, 0, 0);
      `;
    case 8:
      return css`
        ${rotated};
        transform: matrix(0, -1, 1, 0, 0, 0);
      `;
    default:
      return '';
  }
};

export default getOrientationTransform;
