"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Rotas = require("./rotas");


ReactDOM.render(<Rotas />, document.getElementById("app"));

//para atulizar  em tempo  real  o navegador //apenas no  desenvolvimento
module.hot.accept();
