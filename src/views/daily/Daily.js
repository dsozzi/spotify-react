import React, { Component } from "react";
import Album from "../../components/Album";
import daily1 from "../../images/daily/daily1.png";
import daily2 from "../../images/daily/daily2.png";
import daily3 from "../../images/daily/daily3.png";
import daily4 from "../../images/daily/daily4.png";
import daily5 from "../../images/daily/daily5.png";
import "./daily.css";

export default class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Your Daily Mixes</h1>
                <section id="daily" className="section-container">
                    <h3 className="section-title">
                        Play the music you love, without the effort. Packed with your favourites and new discoveries.
                    </h3>
                    <div className="section-album-container">
                        <Album image={daily1} title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album image={daily2} title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album image={daily3} title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album image={daily4} title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                        <Album image={daily5} title="Germany top 50" desc="playlist" footer="65,837 FOLLOWERS" />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
