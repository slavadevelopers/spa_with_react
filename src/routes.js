import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeRoute } from './page/home/index';
import { ContactRoute } from './page/contact/index';
import ErrorPage from './page/errors/index';


export default (
    <Switch>
        { HomeRoute }
        { ContactRoute }

        <Route component={ ErrorPage } />
    </Switch>
);
