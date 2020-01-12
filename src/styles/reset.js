import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body, html {
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
    }

    button {
        border: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ol, ul {
        list-style: none;
    }
`;

export default GlobalStyle;
