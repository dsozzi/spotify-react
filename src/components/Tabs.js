import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const TabNavigator = props => {
    return (
        <ul className="tab-navigator">
            <li>
                <NavLink to="/" activeClassName="active">
                    OVERVIEW
                </NavLink>
            </li>
            <li>
                <NavLink to="/podcasts" activeClassName="active">
                    PODCASTS
                </NavLink>
            </li>
            <li>
                <NavLink to="/charts" activeClassName="active">
                    CHARTS
                </NavLink>
            </li>
            <li>
                <NavLink to="/moods" activeClassName="active">
                    GENRES & MOODS
                </NavLink>
            </li>
            <li>
                <NavLink to="/new-releases" activeClassName="active">
                    NEW RELEASES
                </NavLink>
            </li>
            <li>
                <NavLink to="/discovery" activeClassName="active">
                    DISCOVERY
                </NavLink>
            </li>
            <li>
                <NavLink to="/concerts" activeClassName="active">
                    CONCERTS
                </NavLink>
            </li>
        </ul>
    );
};

export default TabNavigator;
