import { AppColors } from "theme/colors";
import { IconSVG } from "./icon.styles";

export type IconColor = AppColors | "inherit";

export interface IconProps {
  color: IconColor;
  hoverColor?: IconColor;
  viewBox?: string;
}

const Icon: React.FC<IconProps> = ({
  color = "fg",
  hoverColor,
  viewBox,
  children,
}) => {
  return (
    <IconSVG color={color} hoverColor={hoverColor} viewBox={viewBox}>
      {children}
    </IconSVG>
  );
};

export default Icon;
