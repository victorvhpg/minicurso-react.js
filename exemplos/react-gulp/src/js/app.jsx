var React = require("react");
var ReactDOM = require("react-dom");
var Topo = require("./componentes/topo.jsx");
var Rodape = require("./componentes/Rodape.jsx");


// function HelloWorld2(props) {
//   return (
//     <div>Hello {props.name}</div>
//   );

// }



var HelloWorld = React.createClass({
  render: function () {
    return (
      <div>
        <Topo />
        conteudo ...      
        <Rodape />
      </div>
    );
  }
});



ReactDOM.render(<HelloWorld />, document.getElementById("app"));
