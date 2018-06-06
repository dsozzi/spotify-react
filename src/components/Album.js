import React, { Component } from "react";

export default class Album extends Component {
    generateRandomInteger = (min = 1, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

    render() {
        const imgUrl = this.props.image || "";
        return (
            <div className="album">
                <img src={imgUrl} alt="" className="album-cover" />
                <a className="album__title" href="#">
                    {this.props.title}
                </a>
                {this.props.desc && (
                    <p className="album__description ">Your daily update of the most viral tracks in the world!</p>
                )}
                <p className="album__footer ">{this.props.footer}</p>
            </div>
        );
    }
}
