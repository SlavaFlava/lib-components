import 'styled-components';
import { ITheme, Theme } from './my-lib/theme/default-theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme { }
}