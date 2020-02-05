import React, { Component } from 'react';
import Body from './Body';
import heroImg from '../assets/cervinia.jpg';
import '../styles/home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Body />

                <img src={heroImg} alt="Cervinia" className="heroImg" />
            </div>
        );
    }
}
