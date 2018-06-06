import React, { Component } from "react";
import Album from "../../components/Album";
import Image from "../../components/Image";
import SectionHeader from "../../components/SectionHeader";

import "./charts.css";

export default class Charts extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section-container" id="charts">
                    <SectionHeader title="Fetaured Charts" />
                    <div className="section-album-container ">
                        <Image
                            render={image => (
                                <Album image={image} title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                            )}
                        />
                        <Image
                            render={image => (
                                <Album image={image} title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                            )}
                        />{" "}
                        <Image
                            render={image => (
                                <Album image={image} title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                            )}
                        />{" "}
                        <Image
                            render={image => (
                                <Album image={image} title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                            )}
                        />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
