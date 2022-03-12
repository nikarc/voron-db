import { createGlobalStyle } from "styled-components";
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
    background-color: #1b1e1f;
    color: #fafafa;
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
`;

export default GlobalStyle;
