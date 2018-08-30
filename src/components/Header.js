import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { colors } from '../css/variables';

const Root = styled.header`
    display: flex;
    flex: 0 0 auto;
    overflow: hidden;
    padding: 1rem 2rem;

    @media (max-width: 699px) {
        border-bottom: 1.1px solid ${colors.border};
    }

    @media (min-width: 700px) {
        border-right: 1.1px solid ${colors.border};
        height: 100vh;
        width: 100px;
        padding: 2rem;
    }
`;

const Title = styled.h1`
    font-family: Prata;
    font-size: 2rem;
    letter-spacing: 1px;
    margin: 0;

    @media (min-width: 700px) {
        writing-mode: sideways-lr;
        text-align: right;
    }
`;

const Anchor = styled(Link)`
    color: ${colors.heading};
`;


function Header() {
    return (
        <Root>
            <Title>
                <Anchor to="/">{`Organic Books`}</Anchor>
            </Title>
        </Root>
    );
}

export default Header;
