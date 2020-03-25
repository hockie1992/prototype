import React, { Component } from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

window.onload = function(e) {
    if (document.getElementById("app")) {
        ReactDOM.render(<App />, document.getElementById("app"));
    }
};
