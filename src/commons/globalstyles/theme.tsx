import type { DefaultTheme } from 'styled-components';

const colors = {
  text: ['#000000', '#808080', '#ffffff'],
  green: ['#18978F', '#54BAB9'],
  warning: ['#E9DAC1', '#F7ECDE'],
};

const fontsize = {
  big: '36pt',
  middle: '24pt',
  small: '16pt',
};
export type ColorTypes = typeof colors;
export type FontSizeTypes = typeof fontsize;

export const theme: DefaultTheme = {
  colors,
  fontsize,
};
