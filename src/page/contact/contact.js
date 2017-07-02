import React from 'react';

export default class Contact extends React.Component {
    
    static path = '/contact';
    
    render() {
        return (
            <div>
                <div className='alert alert-info' role='alert'>
                    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                </div>
            </div>
        );
    }
}
