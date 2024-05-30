import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ message: 'REACT' });
        }, 5500);
    }

    render() {
        return (
            <main>
                <p>{this.state.message}</p>
            </main>
        );
    }
}

export default Footer;