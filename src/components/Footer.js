import React from 'react';
import styled from 'styled-components';

import { colors, fonts, linkStyle, sizes } from '../css/variables';
import Container from './Container';
import OutgoingLink from './OutgoingLink';

const Root = styled.div`
    padding: ${sizes.l} 2rem;
    background-color: ${colors.highlight};
    border-top: 1px solid ${colors.border};

    @media (min-width: 500px) {
        padding: ${sizes.l} ${sizes.xl};
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li + li {
        margin-top: 1rem;
    }

    a {
        ${linkStyle};
    }
`;

const Info = styled.div`
    margin-bottom: 2.5rem;
`;

const Anchor = styled(OutgoingLink)`
    ${fonts.heading};
`;

function Footer(props) {
    const siteDescription
        = `Organic Books – the bookstore in Nob Hill`;

    return (
        <Root>
            <Container>
                <Info>
                    {siteDescription} |
                    &copy; 2018 <br />
                    Site built by{' '}
                    <OutgoingLink to={`https://permafuture.net  `}>
                        Max Brewer
                    </OutgoingLink> with open-source technologies.
                </Info>

                <ul>
                    <li>
                        <Anchor to="http://bit.ly/digital-psychology-updates">
                            {`Subscribe to updates`}
                        </Anchor>
                    </li>
                    <li>
                        <Anchor
                            to={`http://twitter.com/share?text=${encodeURIComponent(
                                siteDescription
                            )}&url=http://organicbooks.cool`}>
                            {`Share on Twitter`}
                        </Anchor>
                    </li>
                </ul>
            </Container>
        </Root>
    );
}

export default Footer;
