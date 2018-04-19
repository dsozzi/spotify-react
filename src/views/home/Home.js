import React, { Component } from "react";
import Album from "../../components/Album";

import "./home.css";

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 />
                <section id="home" className="section-container">
                    <h3 className="section-title">Il tuo pomeriggio in musica</h3>
                    <div className="section-album-container">
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                    </div>
                </section>
                <section id="home" className="section-container">
                    <h3 className="section-title">Genres & Moods</h3>
                    <div className="section-album-container">
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />

                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />

                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                        <Album title="Germany top 50" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
