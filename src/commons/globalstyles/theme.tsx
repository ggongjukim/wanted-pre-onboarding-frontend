import { DefaultTheme } from 'styled-components';

const colors = {
  text: ['#000000', '#808080', '#ffffff'],
  green: ['#18978F', '#54BAB9'],
  warning: ['#E9DAC1', '#F7ECDE'],
};

export type ColorTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
