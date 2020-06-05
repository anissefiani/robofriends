import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Cardlist from "./Cardlist";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { robots } from "./robots";

ReactDOM.render(<Cardlist robots={robots} />, document.getElementById("root"));

serviceWorker.unregister();
