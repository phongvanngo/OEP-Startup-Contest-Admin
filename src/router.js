import React, { lazy, Suspense } from 'react';

import {
    Route,
    Redirect,
    BrowserRouter as Router,
    Switch,
    useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

const SignIn = lazy(() => import('./features/signIn/View/SignIn'));
const Dashboard = lazy(() => import('./Container/Dashboard/Dashboard'))

function PrivateRoute({ children, ...rest }) {
    const { isLogin } = useSelector(state => state.signIn);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLogin ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/signIn",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

export default function Routes() {
    return (
        <Suspense fallback={<div>loading</div>}>
            <Router>
                <Switch>

                    <Route path="/signIn" component={SignIn} />
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>


                </Switch>
            </Router>
        </Suspense>
    )
};


