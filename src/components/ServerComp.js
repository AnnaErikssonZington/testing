import React, { Component } from 'react';
import '../styles/servercomp.css';

export default class ServerComp extends Component {
    // state = {
    //     name: [],
    // };
    // componentDidMount() {
    //     console.log('hej');
    //     fetch('/names')
    //         .then(res => res.json())
    //         .then(names => this.setState({ names }, () => console.log('fetched names', names)));
    // }
    render() {
        return (
            <section className="apiCompContainer">
                <h1>Practice Server</h1>
                <div className="todoElements">
                    <input type="text" placeholder="Add serverComp" id="addTodo"></input>
                    <button className="todoButton" onClick={this.addTodo}>
                        Add
                    </button>
                    <div></div>
                </div>
            </section>
        );
    }
}
