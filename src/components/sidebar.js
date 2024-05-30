import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ message: '¡Y estoy aprendiendo a utilizar!' });
        }, 4000);
    }

    render() {
        return (
            <main>
                <p>{this.state.message}</p>
            </main>
        );
    }
}

export default Sidebar;
