import React from "react";
import "../css/components/input.css";
const Input = props => <input type={props.type || "text"} placeholder={props.placeholder} />;

export default Input;
