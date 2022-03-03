import getImageOrientation from './getImageOrientation';
import resizeRotateImage, { pica } from './resizeRotateImage';
import createImageFromFile from './createImageFromFile';

const createResizedImageBlobFromFile = async (
  file: Blob,
  sizeLimit: number,
  forceRotate?: boolean,
  onImageCreated?: (image: HTMLImageElement, orientation: number) => void
) => {
  const image = await createImageFromFile(file);
  const orientation = await getImageOrientation(file);

  if (onImageCreated) {
    onImageCreated(image, orientation);
  }

  let width = image.width;
  let height = image.height;

  let blob: Blob = file;

  if (width * height > sizeLimit) {
    const ratio = Math.sqrt((width * height) / sizeLimit);
    width = Math.floor(width / ratio);
    height = Math.floor(height / ratio);

    const resizedCanvas = await resizeRotateImage(
      image,
      width,
      height,
      orientation
    );

    blob = await pica.toBlob(resizedCanvas, 'image/jpeg', 0.95);
  } else if (forceRotate) {
    const resizedCanvas = await resizeRotateImage(
      image,
      width,
      height,
      orientation
    );

    blob = await pica.toBlob(resizedCanvas, 'image/jpeg', 0.95);
  }

  return { blob, width, height };
};

export default createResizedImageBlobFromFile;
