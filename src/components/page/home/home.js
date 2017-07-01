import React from 'react';

export default class Home extends React.Component {
    
    static path = '/';
    
    render() {
        return (
            <div>
                <div className='alert alert-success' role='alert'>
                    <strong>Well done!</strong> You successfully read this important alert message.
                </div>
            </div>
        );
    }
}
