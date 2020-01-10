import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';

import PageTemplate from 'components/common/PageTemplate';
import Button from 'components/common/Button';
import { media, palette as p } from 'styles';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 212px);
    flex-direction: column;

    ${media.tablet`
        min-height: calc(100vh - 218px);
    `};

    & .fa-arrow-right {
        vertical-align: 1.4px;
    }
`;

const Title = styled.h1`
    color: ${p.darkblue};
    font-size: 48px;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 24px;
    color: ${props => lighten(0.3, p.darkblue)};
    margin-bottom: 60px;
`;

const HomePage = () => {
    return (
        <PageTemplate>
            <Container>
                <Title>한국어 암호화</Title>
                <Description>땅쒼의 한끅어는 위뮈 암호화뙤었따!</Description>
                <Link to="/encrypt">
                    <Button>
                        Get Started <i className="fas fa-arrow-right fa-xs" />
                    </Button>
                </Link>
            </Container>
        </PageTemplate>
    );
};

export default HomePage;
