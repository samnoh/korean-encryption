import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';
import Footer from './Footer';

const Content = styled.div`
    min-height: 100vh;
    background: #343639;
`;

const Main = styled.main``;

const PageTemplate = ({ children }) => {
    return (
        <Content>
            <NavBar />
            <Main>{children}</Main>
            <Footer />
        </Content>
    );
};

export default PageTemplate;
