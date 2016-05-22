var React = require("react");

var Router = require("react-router").Router;
var Route = require("react-router").Route;
var IndexRoute = require("react-router").IndexRoute;
var browserHistory = require("react-router").browserHistory;

var Master = require("./master");
var Home = require("./paginas/home");
var Sobre = require("./paginas/sobre");
var Usuarios = require("./paginas/usuarios");
var Usuario = require("./paginas/usuario");


var Erro404 = React.createClass({
  render: function () {
    console.log("render: master");
    return (
        <h2>Página não encontrada</h2>
    );
  }
});



var Rotas = React.createClass({
  render: function () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Master}>
          <IndexRoute component={Home} />
          <Route path="sobre" component={Sobre}/>
          <Route path="usuarios" component={Usuarios}>
            <Route path="ver/:id" component={Usuario}/>
          </Route>
          <Route path="*" component={Erro404}/>
        </Route>
      </Router>
    );
  }
});


module.exports = Rotas;
