import React from 'react';
import '../styles/navbar.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function ItemNav() {
    return (
        <ul className="navbar">
            <li>
                <NavLink to="/" exact activeStyle={{ color: 'grey' }} className="nav-link">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" activeStyle={{ color: 'grey' }} className="nav-link">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/testing" activeStyle={{ color: 'grey' }} className="nav-link">
                    Testing
                </NavLink>
            </li>
        </ul>
    );
}

ItemNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateItem: PropTypes.func.isRequired,
};

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: '',
        };

        this.updateTab = this.updateTab.bind(this);
    }

    updateTab(selectedTab) {
        this.setState({ selectedTab });
    }

    render() {
        const { selectedTab } = this.state;
        return (
            <React.Fragment>
                <ItemNav selected={selectedTab} onUpdateItem={this.updateTab} />
            </React.Fragment>
        );
    }
}
