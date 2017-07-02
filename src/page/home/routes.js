import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';

export default (
    <Route exact component={ Home } path={Home.path} />
);
