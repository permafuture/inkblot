import { injectGlobal } from 'styled-components';

import wcrhesus from './fonts/WC-Rhesus-A-Bta-webfont.woff';

import { colors, fonts } from './variables';

// eslint-disable-next-line no-unused-expressions
injectGlobal`

    // @font-face {
    //     font-family: 'WC Rhesus A Bta';
    //     font-style: normal;
    //     src:
    //         local('WC Rhesus A Bta'),
    //         url(${wcrhesus}) format('woff');
    // }

    @import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);
    @import url('https://fonts.googleapis.com/css?family=Prata');
    * {
        box-sizing: border-box;
    }

    html {
        ${fonts.text}
        font-size: 14px;
        line-height: 1.6;

        @media (min-width: 500px) {
            font-size: 16px;
        }

        @media (min-width: 700px) {
            font-size: 18px;
        }
    }

    body {
        background-color: ${colors.bg};
        margin: 0;
        padding: 0;
    }

    h1, h2, h3 {
        ${fonts.heading}
    }

    h1 {
        font-size: 3rem;
        margin: 0 0 2rem;
        line-height: 1.2;
    }

    h2 {
        font-size: 1.5rem;
        margin: 2.5rem 0 1rem;
        line-height: 1.6;
    }

    h3 {
        font-size: 1rem;
        margin: 2.5rem 0 1rem;
        line-height: 1.6;
    }

    p {
        margin: 1rem 0;
    }

    a {
        text-decoration: none;

    }

    strong {
        font-weight: bold;
        color: ${colors.heading};
    }

    ::selection {
        background-color: rgba(0, 0, 0, .99);
        color: #fff;
    }
`;
