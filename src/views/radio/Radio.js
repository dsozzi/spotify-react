import React, { Component } from "react";
import Album from "../../components/Album";
import SectionHeader from "../../components/SectionHeader";

import "./radio.css";

export default class Radio extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Radio</h1>
                <section id="home" className="section-container">
                    <SectionHeader title="Recently Played" controls="true" />

                    <div className="section-album-container section-album-container--scrollable">
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
                <section id="home" className="section-container">
                    <SectionHeader title="Reccomended Stations" controls="true" />
                    <div className="section-album-container section-album-container--scrollable">
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
