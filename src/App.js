import React, { Component } from "react";
import "./css/components/tabs.css";
import "./css/components/album.css";
import "./css/components/sidebar.css";
import "./css/components/section.css";
import "./css/components/window-controls.css";
import "./App.css";

import ComingSoon from "./components/ComingSoon";
import Daily from "./views/daily/Daily";
import Home from "./views/home/Home";
import Radio from "./views/radio/Radio";
import { HashRouter as Router, Route, NavLink, Switch } from "react-router-dom";

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
                        <div className="sidebar">
                            <ul>
                                <li>
                                    <NavLink exact to="/" activeClassName="active">
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
                        <div id="mainArea">
                            {/* <section className="main-header">
                            <div className="main-header__background"></div>
                        </section> */}
                            <Switch>
                                <Route exact path="/" component={Home} />
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
