import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles';

const HomePage = lazy(() => import('pages/HomePage'));
const EncryptPage = lazy(() => import('pages/EncryptPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Suspense fallback={null}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/encrypt" component={EncryptPage} />
                    <Route path="/about" component={AboutPage} />
                </Switch>
            </Suspense>
        </>
    );
};

export default App;
