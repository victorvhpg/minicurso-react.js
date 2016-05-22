"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
var HelloWorld = require("./componentes/hello-world");
var ExemploForm = require("./componentes/exemplo-form");
var Rotas =  require("./componentes/exemplo-rota/rotas");

var App = React.createClass({
  // componentDidMount: function () {
  //   setInterval(function(){
  //     this.refs.teste.aumentarContador();
  //   }.bind(this), 1000);
  // },

  render: function () {
    return (
      <div>
          app de Exemplo
          <HelloWorld ref="teste" idade={3} mensagem="oi"   />
          <hr />
          <ExemploForm />

      </div>
    );
  }
});


ReactDOM.render(<Rotas />, document.getElementById("app"));




module.hot.accept();
