import { DefaultTheme } from "styled-components";
import { colors } from "./colors";
import { media } from "./media-queries";
import { sizes } from "./sizes";

export interface AppTheme extends DefaultTheme {
  media: Record<string, any>;
  colors: Record<string, any>;
  sizes: Record<string, any>;
}

export const theme: AppTheme = {
  media,
  colors,
  sizes,
};
