import Slider from 'rc-slider';
import styledOmitProps from '../utils/styledOmitProps';

export default styledOmitProps<{ gradient?: boolean }, typeof Slider>(
  Slider,
  []
)`
  &.rc-slider {
    width: auto;
    margin: 0 10px;
  }

  &.rc-slider .rc-slider-rail {
    width: auto;
    left: -10px;
    right: -10px;

    height: ${p => (p.gradient ? '8px' : '4px')};
    background: ${p =>
      p.disabled
        ? p.theme.sliderRailDisabledColor
        : p.gradient
        ? p.theme.sliderRailGradientColor
        : p.theme.sliderRailColor};
  }

  &.rc-slider-disabled {
    background: none;
  }

  &.rc-slider .rc-slider-track {
    background: none;
  }

  &.rc-slider-disabled .rc-slider-track {
    background: none;
  }

  &.rc-slider .rc-slider-step {
    height: 8px;
  }

  &.rc-slider .rc-slider-handle {
    width: 24px;
    height: 24px;
    margin-left: -12px;
    margin-top:${p => (p.gradient ? '-8px' : '-10px')};
    border: 0;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
  }

  &.rc-slider .rc-slider-handle:hover {
    border: 0;
  }

  &.rc-slider .rc-slider-handle:focus {
    border: 0;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25);
  }
`;
