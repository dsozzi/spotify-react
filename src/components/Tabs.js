import React from "react";
import { NavLink } from "react-router-dom";

const TabNavigator = props => {
    return (
        <ul className="tab-navigator">
            <li>
                <NavLink exact to={`${props.base}`} activeClassName="active">
                    OVERVIEW
                </NavLink>
            </li>
            <li>
                <NavLink to={`${props.base}/podcasts`} activeClassName="active">
                    PODCASTS
                </NavLink>
            </li>
            <li>
                <NavLink to={`${props.base}/charts`} activeClassName="active">
                    CHARTS
                </NavLink>
            </li>
            <li>
                <NavLink to={`${props.base}/moods`} activeClassName="active">
                    GENRES & MOODS
                </NavLink>
            </li>
            <li>
                <NavLink to={`${props.base}/new-releases`} activeClassName="active">
                    NEW RELEASES
                </NavLink>
            </li>
            <li>
                <NavLink to={`${props.base}/discovery`} activeClassName="active">
                    DISCOVERY
                </NavLink>
            </li>
            <li>
                <NavLink to={`${props.base}/concerts`} activeClassName="active">
                    CONCERTS
                </NavLink>
            </li>
        </ul>
    );
};

export default TabNavigator;
