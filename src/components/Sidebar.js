import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Section extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName="active">
                            Browse
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/radio" activeClassName="active">
                            Radio
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span className="sidebar__title">YOUR LIBRARY</span>
                    </li>
                    <li>
                        <NavLink to="/daily" activeClassName="active">
                            Your Daily Mix
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/recents" activeClassName="active">
                            Recently Played
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/songs" activeClassName="active">
                            Songs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/albums" activeClassName="active">
                            Albums
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/artists" activeClassName="active">
                            Artists
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/stations" activeClassName="active">
                            Stations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/local-files" activeClassName="active">
                            Local Files
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/podcasts" activeClassName="active">
                            Podcasts
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <span className="sidebar__title">PLAYLISTS</span>
                    </li>
                    <li>
                        <NavLink to="/1" activeClassName="active">
                            Bambini che ballano
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/2" activeClassName="active">
                            Lucio Battisti
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/3" activeClassName="active">
                            Mazinga Z
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/4" activeClassName="active">
                            Rocky Balboa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/5" activeClassName="active">
                            Baby Dance
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/6" activeClassName="active">
                            Celentano
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/7" activeClassName="active">
                            Kylie Minogue
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}
