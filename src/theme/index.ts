import styled, {
  createGlobalStyle,
  css,
  DefaultTheme,
  keyframes,
  ThemeProvider,
} from "styled-components";

import { colors } from "./variables/colors";
import { fonts } from "./variables/fonts";
import { devices } from "./variables/devices";

const theme: DefaultTheme = {
  colors,
  devices,
  fonts,
  rem: (px: number) => {
    const baseFontSize = fonts.initialFontSize;

    return `${px / baseFontSize}rem`;
  },
};

export { createGlobalStyle, css, keyframes, styled, theme, ThemeProvider };
