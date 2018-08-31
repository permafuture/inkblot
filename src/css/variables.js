export const colors = {
    bg: '#fefefe',
    border: '#aaaaaa',
    heading: '#111',
    highlight: '#f8f8f8',
    text: '#222',
    textWeak: '#dc322f'
};

export const fonts = {
    heading: `
        font-family: 'Prata', serif;
        font-weight: 500;
        color: ${colors.heading};
        letter-spacing: 1px;
    `,
    text: `
        font-family: 'Jejumyeongjo', sans-serif;
        font-weight: 300;
        color: ${colors.text};
    `,
    symbol: `
        font-family: 'WC Rhesus A Bta', 'Prata', serif;
        color: ${colors.text};
    `
};

export const sizes = {
    xl: '15vw',
    l: '12vw'
};

export const linkStyle = `
    border-bottom: 1px dotted ${colors.heading};
    color: ${colors.heading};

    &:hover {
        color: ${colors.textWeak};
    }
`;
