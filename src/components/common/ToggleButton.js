import React from 'react';
import styled from 'styled-components';

import { media, palette as p, moveRight, moveLeft } from 'styles';

const Container = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    user-select: none;
    margin-bottom: 40px;

    ${media.mobile`
        padding: 0 15px;
        text-align: left;
    `};

    & label {
        color: ${p.darkblue};
        pointer-events: none;
    }

    & input[type='checkbox'] {
        visibility: hidden;
        margin-left: -12px;
        cursor: pointer;
        outline: none;

        &::before {
            visibility: visible;
            content: ' ';
            position: absolute;
            top: calc(100% + 16px);
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 50px;
            height: 30px;
            background: ${p.lightgray};
            border-radius: 15px;

            ${media.mobile`
                top: 0;
                left: calc(100% - 60px);
            `};
        }

        &::after {
            pointer-events: initial;
            visibility: visible;
            content: ' ';
            position: absolute;
            top: calc(100% + 16px);
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: ${p.lightblue};
            animation: ${moveLeft('10px', '-10px')} 0.3s forwards ease;

            ${media.mobile`
                top: 0;
                left: calc(100% - 60px);
            `};
        }

        &:checked::after {
            background: ${p.blue};
            animation: ${moveRight('10px')} 0.3s forwards ease;
        }
    }
`;

const ToggleButton = ({ title, name, onChange, value, dataAction }) => {
    return (
        <Container>
            <label htmlFor={name}>
                {title}
                <input
                    type="checkbox"
                    value={value}
                    id={name}
                    name={name}
                    onChange={onChange}
                    data-action={dataAction}
                />
            </label>
        </Container>
    );
};

export default ToggleButton;
