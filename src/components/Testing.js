import React, { Component } from 'react';
import Todo from './Todo';
import Instagram from './Instagram';
import Api from './Api';
import ServerComp from './ServerComp';

export default class Testing extends Component {
    render() {
        return (
            <div>
                <Todo />
                <Instagram />
                <Api />
                <ServerComp />
            </div>
        );
    }
}
