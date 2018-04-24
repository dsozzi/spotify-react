import React, { Component } from "react";
import "./css/components/tabs.css";
import "./css/components/album.css";
import "./css/components/sidebar.css";
import "./css/components/section.css";
import "./css/components/window-controls.css";
import "./App.css";

import ComingSoon from "./components/ComingSoon";
import Sidebar from "./components/Sidebar";
import Daily from "./views/daily/Daily";
import Home from "./views/home/Home";
import Radio from "./views/radio/Radio";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/* create header compnent */}
                    <div className="App-header">
                        <div className="window-controls">
                            <span className="window-control--close" />
                            <span className="window-control--minimize" />
                            <span className="window-control--maximize" />
                        </div>
                    </div>
                    {/* create sidebar compnent */}
                    <div id="main">
                        <Sidebar />
                        <div id="mainArea">
                            {/* <section className="main-header">
                            <div className="main-header__background"></div>
                        </section> */}
                            <Switch>
                                <Route exact path="/" render={() => <Redirect to="/home" />} />
                                <Route exact path="/home" component={Home} />
                                <Route exact path="/home/:section" component={Home} />
                                <Route path="/daily" component={Daily} />
                                <Route path="/radio" component={Radio} />
                                <Route component={ComingSoon} />
                            </Switch>
                        </div>
                    </div>
                    <div id="player" />
                </div>
            </Router>
        );
    }
}

export default App;
