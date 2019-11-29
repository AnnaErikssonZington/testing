import React, { Component } from 'react';
import '../styles/todo.css';

export default class Todo extends Component {
    state = {
        list: [],
    };

    addTodo = e => {
        e.preventDefault();
        let newList = this.state.list.reverse();

        const newTodo = document.getElementById('addTodo').value;
        if (newTodo !== '') {
            newList.push(newTodo);
            this.setState({
                list: newList,
            });
        }
        document.getElementById('addTodo').value = '';
    };
    removeTodo = item => {
        let list = this.state.list.slice();
        list.map((el, i) => {
            if (el === item) {
                list.splice(i, 1);
            }
        });

        this.setState({
            list: list.reverse(),
        });
    };
    render() {
        return (
            <div>
                <section className="todoContainer">
                    <h1>Todo List</h1>
                    <div className="todoElements">
                        <input type="text" placeholder="Add todo" id="addTodo"></input>
                        <button className="todoButton" onClick={this.addTodo}>
                            Add
                        </button>
                    </div>
                    <ul>
                        {this.state.list.reverse().map((item, i) => (
                            <li className="todoItem" key={i}>
                                {item}
                                <div className="removeButton" onClick={() => this.removeTodo(item)}>
                                    X
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        );
    }
}
