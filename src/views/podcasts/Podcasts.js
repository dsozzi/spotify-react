import React, { Component } from "react";
import Album from "../../components/Album";
import SectionHeader from "../../components/SectionHeader";

import "./podcasts.css";

export default class Podcasts extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section-container">
                    <SectionHeader title="Fetaured Podcasts" controls="true" />
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
            </React.Fragment>
        );
    }
}
