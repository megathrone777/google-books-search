import { css } from "~/theme";
import RobotoFont from "~/../public/fonts/Roboto-Regular.ttf";

const fonts = css`
  @font-face {
    font-family: "Roboto";
    src: url("${RobotoFont}");
  }
`;

export { fonts };
