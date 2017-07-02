import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends React.Component {
    
    render() {
        return (
            <div>
                <div className='alert alert-warning' role='alert'>
                    <strong>Error 404!</strong> Перейдите на <Link to={ '/' }>главную</Link>
                </div>
            </div>
        );
    }
}

