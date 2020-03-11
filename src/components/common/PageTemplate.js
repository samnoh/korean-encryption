import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';
import Notification from './Notification';
import Footer from './Footer';
import { media, palette as p } from 'styles';

const Content = styled.div`
    min-height: 100vh;
    background: ${p.white};
`;

const Main = styled.main`
    max-width: 1100px;
    margin: 0 auto;
    padding: 30px;
    min-height: calc(100vh - 152px);

    ${media.tablet`
        padding: 15px;
        min-height: calc(100vh - 188px);
    `};

    ${media.mobile`
        min-height: calc(100vh - 148px);
    `};
`;

const PageTemplate = ({ children }) => {
    return (
        <Content>
            <NavBar />
            <Main>{children}</Main>
            <Footer />
            <Notification />
        </Content>
    );
};

export default PageTemplate;
