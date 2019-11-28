import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Signin extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    Login from
            <a href=" /contact">Contact</a>
                </div>
            </div>
        );
    }
}

export default Signin;