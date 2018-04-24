import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Daily from "../daily/Daily";
import Overview from "../overview/Overview";
import Podcasts from "../podcasts/Podcasts";
import Charts from "../charts/Charts";
import Album from "../../components/Album";
import Tabs from "../../components/Tabs";
import SectionHeader from "../../components/SectionHeader";
import ComingSoon from "../../components/ComingSoon";

import "./home.css";
export default class Home extends Component {
    render() {
        const BASE_PATH = "/home";
        return (
            <React.Fragment>
                <h1>Browse</h1>
                <Tabs base={BASE_PATH} />
                <Switch>
                    <Route exact path={BASE_PATH} component={Overview} />
                    <Route path={`${BASE_PATH}/podcasts`} component={Podcasts} />
                    <Route path={`${BASE_PATH}/charts`} component={Charts} />
                </Switch>
            </React.Fragment>
        );
    }
}
