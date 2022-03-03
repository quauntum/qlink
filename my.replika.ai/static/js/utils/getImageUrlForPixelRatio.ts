type Options = {
  pixelRatio?: number;
  maxPixelRatio?: number;
};

const getImageUrlForPixelRatio = (url: string, options: Options = {}) => {
  const { pixelRatio = window.devicePixelRatio, maxPixelRatio = 3 } = options;

  for (let ratio = maxPixelRatio; ratio > 1; --ratio) {
    if (pixelRatio >= ratio - 0.5) {
      return url.replace(/\.(png|jpg)/, `@${ratio}x.$1`);
    }
  }

  return url;
};

export default getImageUrlForPixelRatio;
