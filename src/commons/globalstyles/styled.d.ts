import type { FontSizeTypes } from './theme';
import { ColorTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly colors: ColorsTypes;
    readonly fontsize: FontSizeTypes;
  }
}
