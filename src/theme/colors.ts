export type AppColors =
  | "fg"
  | "bg"
  | "red"
  | "secondary"
  | "gray"
  | "grayLight";
type AppColorMap = Record<AppColors, string>;

export const colors: AppColorMap = {
  fg: "#FDFFFC",
  bg: "#011627",
  gray: "#535353",
  grayLight: "#858585",
  red: "#FF0022",
  secondary: "#41EAD4",
};
