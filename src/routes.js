import React from 'react';
import { Switch } from 'react-router-dom';
import { HomeRoute } from './components/page/home/index';
import { ContactRoute } from './components/page/contact/index';


export default (
    <Switch>
        { HomeRoute }
        { ContactRoute }
    </Switch>
);
