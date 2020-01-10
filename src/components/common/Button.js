import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import { palette as p } from 'styles';

const Container = styled.button`
    cursor: pointer;
    outline: none;
    display: inline-block;
    color: ${props => props.color || p.white};
    font-size: 20px;
    background: ${props => props.background || p.lightblue};
    padding: 12px 20px;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    user-select: none;

    &:hover {
        background: ${props => lighten(0.05, props.background || p.lightblue)};
    }
`;

const Button = ({ background, color, children }) => {
    return (
        <Container background={background} color={color}>
            {children}
        </Container>
    );
};

export default Button;
