import { TColors } from "./variables/colors";
import { TFonts } from "./variables/fonts";
import { TDevices } from "./variables/devices";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: TColors;
    devices: TDevices;
    fonts: TFonts;
    rem: (px: number) => string;
  }
}
