import React from 'react';
import Auth from './Auth/Auth';
import ResetPasswordPage from './ResetPasswordPage/ResetPasswordPage';
import { Route, Switch } from 'react-router-dom'

function MainPage() {
    return (
        <div>
            <div>
                <Switch>
                    <Route exact path={"/"}>
                        <Auth signup={true} />
                    </Route>
                    <Route path={"/forgot-password"}>
                        <ResetPasswordPage />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default MainPage;
