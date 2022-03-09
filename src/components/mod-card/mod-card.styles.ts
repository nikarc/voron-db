import styled, { css } from "styled-components";

export const Wrap = styled.li`
  width: 100%;
  padding: 0 12px 12px 12px;

  ${({ theme }) => css`
    border: 2px solid ${theme.colors.fg};
    border-radius: ${theme.sizes.borderRadius}px;

    ${theme.media.tablet} {
      padding: 0 24px 24px 24px;
    }
  `}
`;

export const ModTitle = styled.h4`
  text-transform: capitalize;
`;

export const ModDesc = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
