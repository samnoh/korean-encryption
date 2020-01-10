import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PageTemplate from 'components/common/PageTemplate';
import Button from 'components/common/Button';
import { media, Title, Description } from 'styles';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 212px);
    flex-direction: column;

    ${media.tablet`
        min-height: calc(100vh - 218px);
    `};

    ${media.mobile`
        min-height: calc(100vh - 178px);
    `};

    & .fa-arrow-right {
        vertical-align: 1.4px;
    }
`;

const HomePage = () => {
    return (
        <PageTemplate>
            <Container>
                <Title>한국어 암호화</Title>
                <Description>땅쒼의 한끅어는 이뮈 암호화뙤었따!</Description>
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
