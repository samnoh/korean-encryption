import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import { media, palette as p } from 'styles';

const Container = styled.footer`
    padding: 0 24px;
    height: 100px;
    border-top: 1px solid ${p.lightgray};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${p.darkblue};
    color: ${p.gray};

    ${media.tablet`
        height: 60px;
        font-size: 14px;
        justify-content: center;
    `};

    & .left {
        font-weight: 100;
        align-self: flex-end;
        margin-bottom: 20px;
        color: ${props => darken(0.58, p.lightgray)};
    }

    & .right {
        user-select: none;
        text-transform: uppercase;
        position: relative;
        top: -20px;
        right: -12px;
        transform: rotate(90deg);
        font-size: 10px;
        font-weight: bold;
        color: ${props => darken(0.4, p.lightgray)};

        &::after {
            content: ' ';
            position: absolute;
            width: 30px;
            height: 3px;
            background: ${props => darken(0.4, p.lightgray)};
            top: 7px;
            right: -40px;
        }
    }
`;

const Footer = () => {
    return (
        <Container>
            <div className="left">Copyright © 2020-present Sam Noh</div>
            <div className="right">Sam</div>
        </Container>
    );
};

export default Footer;
