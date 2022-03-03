const realSize = { width: 1080, height: 1920 };

const baseScale = { x: 0.5, y: 0.5 };

export default function avatarSizes(
  width: number,
  height: number,
  scale: number = 1
) {
  const ratio = height / width;
  const viewHeight = ratio * realSize.width;
  const centerY = 0.44 * realSize.height;
  const offsetY = centerY - viewHeight / 2;

  const imageScaleFactor = (width / realSize.width) * scale;
  const imageScale = {
    x: imageScaleFactor / baseScale.x,
    y: imageScaleFactor / baseScale.y
  };

  const offset = {
    x: ((scale - 1) * realSize.width) / 2,
    y: ((scale - 1) * realSize.height) / 2 + offsetY
  };

  const placeholderPosition = {
    width: baseScale.x * imageScale.x * realSize.width,
    height: baseScale.y * imageScale.y * realSize.height,
    left: -baseScale.x * imageScale.x * offset.x,
    top: -baseScale.y * imageScale.y * offset.y
  };

  return { baseScale, imageScale, offset, placeholderPosition };
}
