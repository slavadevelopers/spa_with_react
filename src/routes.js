import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomeRoute } from './components/page/home/index';
import { ContactRoute } from './components/page/contact/index';
import ErrorPage from './components/page/errors/index';


export default (
    <Switch>
        { HomeRoute }
        { ContactRoute }

        <Route component={ ErrorPage } />
    </Switch>
);
