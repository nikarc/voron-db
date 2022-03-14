import { DefaultTheme } from "styled-components";
import { AppColors, colors } from "./colors";
import { media } from "./media-queries";
import { sizes } from "./sizes";
import { timing } from "./timing";

export interface AppTheme extends DefaultTheme {
  media: Record<string, any>;
  colors: Record<AppColors, any>;
  sizes: Record<string, any>;
  timing: Record<string, number>;
}

export const theme: AppTheme = {
  media,
  colors,
  sizes,
  timing,
};
