import React, { Component } from "react";
import "./App.css";
import Daily from "./views/daily/Daily";
import Home from "./views/home/Home";
import Radio from "./views/radio/Radio";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

const Root = ({ match }) => {
    if (match.url.endsWith("/")) {
        match.url = match.url.replace(/\/$/, "");
    }
    return (
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
                            {console.log(match)}
                            <NavLink exact to={`${match.url}`} activeClassName="active">
                                Browse
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/radio`} activeClassName="active">
                                Radio
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className="sidebar__title">YOUR LIBRARY</span>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/daily`} activeClassName="active">
                                Your Daily Mix
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/recents`} activeClassName="active">
                                Recently Played
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/songs`} activeClassName="active">
                                Songs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/albums`} activeClassName="active">
                                Albums
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/artists`} activeClassName="active">
                                Artists
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/stations`} activeClassName="active">
                                Stations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/local-files`} activeClassName="active">
                                Local Files
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/podcasts`} activeClassName="active">
                                Podcasts
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <span className="sidebar__title">PLAYLISTS</span>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/kids`} activeClassName="active">
                                Bambini che ballano
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/battisti`} activeClassName="active">
                                Lucio Battisti
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/mazinga`} activeClassName="active">
                                Mazinga Z
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/rocky`} activeClassName="active">
                                Rocky Balboa
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/baby`} activeClassName="active">
                                Baby Dance
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/celentano`} activeClassName="active">
                                Celentano
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={`${match.url}/minogue`} activeClassName="active">
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
                        {console.log(match.url)}
                        <Route exact path={`${match.url}/`} component={Home} />
                        <Route path={`${match.url}/daily`} component={Daily} />
                        <Route path={`${match.url}/radio`} component={Radio} />
                    </Switch>
                </div>
            </div>
            <div id="player" />
        </div>
    );
};

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/spotify-react" component={Root} />
            </Router>
        );
    }
}

export default App;
