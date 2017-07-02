import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {

    static path = '/';
    
    render() {
        return (

            <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
                <Link className='navbar-brand' to='/'>SPA whith React</Link>
                <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                    <li className='nav-item'>
                        <Link className='nav-link' to={ '/' }>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to={ 'contact' }>Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to={ 'contacts' }>Error 404</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
