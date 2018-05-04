import React from "react";
import Input from "./Input";
const Header = props => {
    return (
        <div className="app-header">
            <div className="controls">
                <div className="goBack control-disabled" />
                <div className="goNext" />
            </div>
            <Input placeholder="Search" />
        </div>
    );
};

export default Header;
