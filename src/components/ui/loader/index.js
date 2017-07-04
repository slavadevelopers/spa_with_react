import React from 'react';
import './style.less';

export default class Loader extends React.Component {
    
    static path = '/';
    
    render() {
        return (
            <span className="loader"></span>
        );
    }
}
