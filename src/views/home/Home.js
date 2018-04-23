import React, { Component } from "react";
import Album from "../../components/Album";
import SectionHeader from "../../components/SectionHeader";
import Tabs from "../../components/Tabs";

import "./home.css";

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Browse</h1>
                <Tabs />
                <section className="section-container">
                    <SectionHeader title="Il tuo pomeriggio in musica" controls="true" />
                    <div className="section-album-container section-album-container--scrollable ">
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                    </div>
                </section>
                <section className="section-container">
                    <SectionHeader title="Genres & Moods" />
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
