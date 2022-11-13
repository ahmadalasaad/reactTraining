import React, { Component } from 'react';
import logo from './../rightlogo.jpg'
class Header extends Component {
    state = {}
    render() {
        return (
            <dev className='header'>
                <nav className="nav">
                    <a href="" className='rightLogo'>
                        <img src={logo} alt=''/>
                    </a>
                    <ul className="nav__links">
                        <li>
                            <a href='/'><span className="nav__bold">00  Home</span></a>
                        </li>
                        <li>
                            <a href='/destination'><span className="nav__bold">01 Destination</span></a>
                        </li>
                        <li>
                            <a href='/crew'><span className="nav__bold">02 Crew</span></a>
                        </li>
                        <li>
                            <a href='/technology'><span className="nav__bold">03 Technology</span></a>
                        </li>
                    </ul>
                </nav>
            </dev>
        );
    }
}

export default Header;