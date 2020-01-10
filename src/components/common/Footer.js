import React from 'react';
import styled from 'styled-components';

import { media, palette as p } from 'styles';

const Container = styled.footer`
    font-weight: 100;
    padding: 0 24px;
    color: ${p.gray};
    height: 100px;
    border-top: 1px solid ${p.lightgray};
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${media.tablet`
        justify-content: center;
    `};
`;

const Footer = () => {
    return <Container>Copyright © 2020-present Sam Noh</Container>;
};

export default Footer;
