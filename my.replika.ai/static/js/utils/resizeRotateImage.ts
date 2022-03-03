import createPica from 'pica/dist/pica';

export const pica = createPica();

// https://stackoverflow.com/questions/20600800/js-client-side-exif-orientation-rotate-and-mirror-jpeg-images
const resizeRotateImage = async (image, width, height, srcOrientation) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;

  const resizedCanvas = await pica.resize(image, canvas, { alpha: true });

  const rotatedCanvas = document.createElement('canvas');
  const ctx = rotatedCanvas.getContext('2d');

  if (!ctx) {
    return resizedCanvas;
  }

  // set proper canvas dimensions before transform & export
  if (4 < srcOrientation && srcOrientation < 9) {
    rotatedCanvas.width = height;
    rotatedCanvas.height = width;
  } else {
    rotatedCanvas.width = width;
    rotatedCanvas.height = height;
  }

  // transform context before drawing image
  switch (srcOrientation) {
    case 2:
      ctx.transform(-1, 0, 0, 1, width, 0);
      break;
    case 3:
      ctx.transform(-1, 0, 0, -1, width, height);
      break;
    case 4:
      ctx.transform(1, 0, 0, -1, 0, height);
      break;
    case 5:
      ctx.transform(0, 1, 1, 0, 0, 0);
      break;
    case 6:
      ctx.transform(0, 1, -1, 0, height, 0);
      break;
    case 7:
      ctx.transform(0, -1, -1, 0, height, width);
      break;
    case 8:
      ctx.transform(0, -1, 1, 0, 0, width);
      break;
    default:
      return resizedCanvas;
  }

  ctx.drawImage(resizedCanvas, 0, 0);

  return rotatedCanvas;
};

export default resizeRotateImage;
