import React, { Component } from 'react';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: '¡Hola, querido publico!'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ message: 'Mi nombre es Cesar Ponce' });
        }, 2000);
    }

    render() {
        return (
            <main>
                <p>{this.state.message}</p>
            </main>
        );
    }
}

export default Header;

