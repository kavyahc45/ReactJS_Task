import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Signup extends Component {
    render() {
        return(
            <div>
            <div>
                <Navbar/>
            </div>
        <div>
        User Login From Widget
        <a href = "/signin"> Signin </a>
        </div>
        </div>
        );
    }
}

export default Signup;