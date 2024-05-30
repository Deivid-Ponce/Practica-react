import React from 'react';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ message: '¡Hasta Luego!' });
        }, 7000);
    }

    render() {
        return (
            <main>
                <p>{this.state.message}</p>
            </main>
        );
    }
}

export default MainContent;
