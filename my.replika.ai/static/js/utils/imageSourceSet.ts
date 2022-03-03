export default (src: string) => ({
  src,
  srcSet:
    `${src.replace(/\.(png|jpg)/, '@2x.$1')} 1.5x, ` +
    `${src.replace(/\.(png|jpg)/, '@2x.$1')} 2x, ` +
    `${src.replace(/\.(png|jpg)/, '@3x.$1')} 3x`
});
