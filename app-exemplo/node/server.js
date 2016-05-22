var React = require("react");
var ReactDOMServer = require("react-dom/server");

var element = React.createElement("div", null, "Hello World!");


console.log(ReactDOMServer.renderToString(element));