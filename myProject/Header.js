import React from 'react'
import {Link} from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <nav className='nav-container'>
                <ul className='list-container'>
                    <li className='list-items'>
                        <Link className='items'>
                          CustomerList
                        </Link>
                    </li>
                    <li className='list-items'>
                        <Link className='items'>
                          Customer Form Page
                        </Link>
                    </li>
                    <li className='list-items'>
                        <Link className='items'>
                          Customer Details
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header