import { ColorTypes, FontSizeTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly colors: ColorsTypes;
    readonly fontsize: FontSizeTypes;
  }
}
