import { css, createGlobalStyle, keyframes } from 'styled-components';

export const theme = {
    // 'state'
    preference: false,
    night: new Date().getHours() >= 20 || new Date().getHours() <= 7 || theme.preference,
    
    directions: ['to bottom right', 'to top left', 'to bottom left', 'to top right'],
    delays: ['0', '.05', '.075', '.1', '1.25', '1.5'],
    durations: ['.15', '.2', '.25'],

    // Colors
    colors: {
        dullBrown: '#F9B32F',
        brightBrown: '#FFCF4B',

        dullGreen: '#3EDC81',
        brightGreen: '#5EFCA1',

        dullTeal: '#37DBD0',
        brightTeal: '#5EFAF7',
    },

    // Layout
    flexin: (jc = 'center', ai = 'center', fd = 'row', fw = 'wrap') =>
        css`
            display: flex;
            justify-content: ${jc};
            align-items: ${ai};
            flex-direction: ${fd};
            flex-wrap: ${fw};
        `,
    fullPage: css`min-height: 100vh; min-width: 100vw;`,
    schemeBg: () =>
        css`
            background-image:
                linear-gradient(to right, 
                    ${theme.night ? 'black' : 'white'} 50%, 
                    ${theme.night ? 'white' : 'black'} 50%);
            background-position: 0% 0%;
            background-size: 200%;

            ${!theme.night && css`animation: ${theme.slideBg} .3s ease-in-out 0 ;`}
        `,

    // Animations
    slideBg: keyframes`
        0% {
            background-position: 0% 0%;
        }

        100% {
            background-position: 100% 0%;
        }
    `,
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

// color site = http://www.flatcolorsui.com/