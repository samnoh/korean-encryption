import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles';

const HomePage = lazy(() => import('pages/HomePage'));

function App() {
    return (
        <>
            <GlobalStyle />
            <Suspense fallback={null}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </Suspense>
        </>
    );
}

export default App;
