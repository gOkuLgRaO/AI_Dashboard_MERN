// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {   // in theme.ts file, mui doesnt contain all variations of a color. so we have to declare the module of styles from palette
  interface PaletteColor {
    [key: number]: string;  // key represents the number alike 100,200 etc and string shows the value of that colour
  }

  interface Palette {    // tertiary is not there in Palette module, so we added that
    tertiary: PaletteColor;
  }
}
