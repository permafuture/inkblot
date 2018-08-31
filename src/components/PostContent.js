import React from 'react';
import styled from 'styled-components';

import { colors, linkStyle, sizes } from '../css/variables';
import Container from './Container';

const Root = styled(Container)`
    margin: ${sizes.l} 2rem;

    @media (min-width: 500px) {
        margin: ${sizes.l} ${sizes.xl};
    }

    img {
        border: 1px solid ${colors.border};
        margin-top: 2rem;
    }

    a {
        ${linkStyle}
    }

    h1 {
        border-bottom: 1.1px solid ${colors.border};
            }
`;

export default function PostContent(props) {
    return (
        <Root>
            <h1>{props.longtitle}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </Root>
    );
}
