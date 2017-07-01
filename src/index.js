import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory'
import configureStore from './store';
import routes from './routes';
import App from './app';

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render((
    <Provider store={ store }>
        <BrowserRouter history={ history }>
            <div>
                <App />
                { routes }
            </div>
        </BrowserRouter>
    </Provider>
),
document.querySelector('#app'));
