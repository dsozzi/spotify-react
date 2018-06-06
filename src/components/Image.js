import React, { Component } from "react";

export default class Image extends Component {
    state = {
        image: null
    };

    generateRandomInteger = (min = 1, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

    componentDidMount() {
        this.setState({
            image: `${process.env.PUBLIC_URL}/images/albums/${this.generateRandomInteger()}.png`
        });
    }
    render() {
        return <React.Fragment>{this.props.render(this.state.image)}</React.Fragment>;
    }
}
