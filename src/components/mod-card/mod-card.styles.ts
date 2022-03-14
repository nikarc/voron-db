import styled, { css } from "styled-components";

export const Wrap = styled.li`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  ${({ theme }) => css`
    border: 2px solid ${theme.colors.grayLight};
    border-radius: ${theme.sizes.borderRadius}px;
    transition: border-color ${theme.timing.normal}s;

    :hover {
      border-color: ${theme.colors.secondary};
    }
  `}
`;

export const ModTextContent = styled.div`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  ${({ theme }) => css`
    ${theme.media.tablet} {
      padding: 0 24px;
    }
  `}
`;

export const ModImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  ${({ theme }) => css`
    background-color: ${theme.colors.grayLight};
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

export const ModCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  align-items: center;
  padding: 0 12px 12px 12px;

  ${({ theme }) => css`
    color: ${theme.colors.grayLight};

    ${theme.media.tablet} {
      padding: 0 24px 24px 24px;
    }
  `}
`;

export const ModByLine = styled.a``;
