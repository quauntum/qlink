type Color = [number, number, number];

export default function getMoodColor(percent: number, alpha: number = 1) {
  let ratio: number;
  let fromColor: Color;
  let toColor: Color;

  if (percent < 0.5) {
    fromColor = [233, 37, 54]; // red
    toColor = [249, 213, 0]; // yellow
    ratio = percent * 2;
  } else {
    fromColor = [249, 213, 0]; // yellow
    toColor = [2, 158, 74]; // green
    ratio = percent * 2 - 1;
  }

  const mix: Color = [
    Math.floor(fromColor[0] * (1 - ratio) + toColor[0] * ratio),
    Math.floor(fromColor[1] * (1 - ratio) + toColor[1] * ratio),
    Math.floor(fromColor[2] * (1 - ratio) + toColor[2] * ratio)
  ];
  return `rgba(${mix[0]},${mix[1]},${mix[2]},${alpha})`;
}
