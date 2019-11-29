import React, { Component } from 'react';
import '../styles/api.css';

export default class Api extends Component {
    constructor(props) {
        super(props);
        this.url = 'https://randomuser.me/api/?results=10';
        this.showPerson = this.showPerson.bind(this);
        this.state = {
            data: {},
            person: 'Vems namn kommer upp? Tryck på knappen för att veta',
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(this.url)
            .then(data => data.json())
            .then(res => {
                this.setState({
                    data: res.results,
                });
            })
            .catch(error => console.log(error));
    }
    showPerson() {
        const number = Math.floor(Math.random() * 10);
        const person = this.state.data[number].name;
        const name = person.title + ' ' + person.first + ' ' + person.last;
        this.setState({ person: name });
    }

    render() {
        return (
            <section className="apiContainer">
                <h1 className="header">API</h1>
                <button className="apiButton" onClick={this.showPerson}>
                    Randomize Person
                </button>
                <div className="personDiscription">{this.state.person}</div>
            </section>
        );
    }
}
