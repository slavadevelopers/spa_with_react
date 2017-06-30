import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router'
import configureState from 'store';
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes';
import createBrowserHistory from 'history/createBrowserHistory'


const store = configureState();
const history = syncHistoryWithStore(createBrowserHistory, store);


ReactDOM.render((
    <Provider store={ store }>
        <Router history={ history }>
            { routes }
        </Router>
    </Provider>
    ),
    document.querySelector('#app')
)
