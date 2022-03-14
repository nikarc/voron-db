import styled, { css } from "styled-components";
import { IconColor } from ".";

export const IconSVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})<{ color: IconColor; hoverColor?: IconColor }>`
  width: 12px;
  height: 12px;
  ${({ theme, color = "inherit", hoverColor = null }) => css`
    path {
      fill: ${theme.colors[color]};

      ${hoverColor &&
      css`
        :hover {
          fill: ${theme.colors[hoverColor]};
        }
      `}
    }
  `}
`;
