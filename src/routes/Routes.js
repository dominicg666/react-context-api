import React, { Suspense, lazy, memo } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';


import { PrivateRoute } from './privateRoutes';
import { PublicRoute } from './publicRoutes';


const LoginPage = lazy(() => import('../screens/signin'));
const SignUpPage = lazy(() => import('../screens/signup'));
const HomePage = lazy(() => import('../screens/home'));
const FilmDetails = lazy(() => import('../screens/FilmDetails'));


const Routes = () => (
    <Suspense fallback={null}>
        <BrowserRouter>
            <Switch>
                <PublicRoute exact path={'/signin'} component={LoginPage} />
                <PublicRoute exact path={'/signup'} component={SignUpPage} />

                <PrivateRoute exact path={'/'} component={HomePage} />
                <PrivateRoute exact path={'/film/:id'} component={FilmDetails} />
            </Switch>
        </BrowserRouter>
    </Suspense>
);

export default memo(Routes);