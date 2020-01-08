import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const HomePage = lazy(() => import('pages/HomePage'));

function App() {
    return (
        <>
            <Suspense fallback={null}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </Suspense>
        </>
    );
}

export default App;
