//DEPENDENCIES
//  REACT
import React from "react";
import ReactDOM from "react-dom";
//  MDB-REACT
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// CSS
import "./index.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//RENDER
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();


