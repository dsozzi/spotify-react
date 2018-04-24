import React from "react";
const SectionHeader = props => {
    return (
        <div className="section-header">
            <h3 className="section-title">{props.title}</h3>
            {props.controls ? (
                <div className="controls">
                    <div className="goBack control-disabled" />
                    <div className="goNext" />
                </div>
            ) : null}
        </div>
    );
};

export default SectionHeader;
