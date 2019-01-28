import React, { Component } from 'react';
import {Link} from 'react-browser-router';
class nav extends Component {
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-fixed-top navbar-inverse navbarClass">
                    <div className="container">
                        <div className="navbar-header">
                            <div className="navbar-brand">
                                <svg version="1.1" className="logo-bird" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 196 150">
                                    <path fill="#FFFFFF" d="M191.093,24.257c-11.956-0.201-30.951-0.723-49.513,0.614c-1.496,0.108-3.137-0.356-3.973-1.604
                                    c-3.091-4.639-9.893-6.956-14.949-6.956c-13.474,0-21.184,13.571-21.968,25.713C89.261,29.907,76.711,18.973,60.043,6.34
                                    c0.227,7.467,1.176,15.347,2.322,22.71c6.621,1.708,9.882,2.667,23.345,8.411C59.604,30.438,34.16,23.823,4.344,23.498
                                    c19.222,26.09,46.251,47.769,77.883,60.469c-4.309,0.051-10.248-2.303-13.7-3.984c-11.605,16.58-19.181,36.777-19.181,58.936
                                    c0,1.594,0.036,3.174,0.108,4.742c15.991-4.18,30.425-12.236,42.221-23.104l-0.005-0.01c-0.903-5.129-1.368-9.795-1.46-15.16
                                    c-4.242,0.381-12.137-0.373-15.708-1.744c1.264,0.016,5.666,0.041,7.183,0.041c2.879,0,5.702-0.238,8.452-0.703
                                    c24.212-4.023,42.505-25.068,42.505-50.42l0,0V41.415c0-7.307,7.927-12.926,14.052-13.504c7.064-1.156,26.869-2.719,44.43-2.843
                                    C191.852,24.892,191.825,24.375,191.093,24.257z M128.092,27.683c-1.316,0-2.39-1.068-2.39-2.384c0-1.321,1.073-2.384,2.39-2.384
                                    c1.315,0,2.384,1.063,2.384,2.384C130.476,26.615,129.407,27.683,128.092,27.683z"></path>
                                </svg>
                            </div>
                            <button className="navbar-toggle" data-toggle="collapse" data-target="#navb">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <Link to="/" className="btn pull-right navbar-btn">Login</Link>
                        <div id="navb" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/">Blog</Link></li>
                                <li><Link to="/">Portfolio</Link></li>                        
                                <li><Link to="/">Packages</Link></li>
                                <li><Link to="/">Contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default nav;