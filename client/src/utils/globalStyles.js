import { css, createGlobalStyle } from 'styled-components';

export const theme = {
    flexin: (jc = 'center', ai = 'center', fd = 'row', fw = 'wrap') =>
        css`
            display: flex;
            justify-content: ${jc};
            align-items: ${ai};
            flex-direction: ${fd};
            flex-wrap: ${fw};
        `
}

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box
    }

    .root {
        min-height: 100vh;
        min-width: 100vw;
    }

`