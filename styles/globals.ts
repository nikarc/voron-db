import { createGlobalStyle, css } from "styled-components";
import { AppTheme } from "theme";

interface Props {
  theme: AppTheme;
}

const GlobalStyle = createGlobalStyle<Props>`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.bg};
      color: ${theme.colors.fg};
    `}
  }

  a {
    color: inherit;
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  * {
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  input {
    outline: none;
    background-color: transparent;
    padding: 8px 12px;
    font-family: monospace;

    ${({ theme }) => css`
      color: ${theme.colors.fg};
      border: 1px solid ${theme.colors.fg};
      border-radius: ${theme.sizes.borderRadius / 2}px;
    `}
  }
`;

export default GlobalStyle;
