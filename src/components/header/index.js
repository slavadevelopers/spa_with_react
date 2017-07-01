import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    
    static path = '/';
    
    render() {
        return (
            <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <Link to={ '/' }>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to={ 'contact' }>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
