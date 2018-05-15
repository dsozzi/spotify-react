import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Overview from "../overview/Overview";
import Podcasts from "../podcasts/Podcasts";
import Charts from "../charts/Charts";
import Tabs from "../../components/Tabs";
import ComingSoon from "../../components/ComingSoon";

import "./home.css";
export default class Home extends Component {
    render() {
        const BASE_PATH = "/home";
        const viewClass = this.props.match.params.section ? "view-" + this.props.match.params.section : "view-home";
        return (
            <React.Fragment>
                <h1>Browse</h1>
                {console.log(this.props)}
                <Tabs base={BASE_PATH} />
                <div className={viewClass}>
                    <Switch>
                        <Route exact path={BASE_PATH} component={Overview} />
                        <Route path={`${BASE_PATH}/podcasts`} component={Podcasts} />
                        <Route path={`${BASE_PATH}/charts`} component={Charts} />
                        <Route component={ComingSoon} />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}
