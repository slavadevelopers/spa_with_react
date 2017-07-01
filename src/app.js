import React from 'react';
import PropTypes from 'prop-types';
import { DevTools } from './utils/index'
import { Header } from './components/index';



export default class App extends React.Component {
    
    static path = '/';
    
    render() {
        return (
            <div>
                <Header />
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
    
}
