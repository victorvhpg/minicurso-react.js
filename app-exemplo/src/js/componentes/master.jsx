"use strict";

var React = require("react");
//var Link = require("react-router").Link;
var Topo = require("./topo");
var Menu = require("./menu");




var Master = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        return {

        };
    },

    componentDidMount: function () {
        window.componentHandler.upgradeAllRegistered(); //ativa  o mdl
    },

    navegar: function () {
        this.context.router.push({
            pathname: "/teste",
            query: {
                teste: "oi"
            }
        });
    },

    render: function () {
        console.log("render: master");
        return (
            <div className="mdl-master-div mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Topo/>
                <Menu/>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        {this.props.children}
                    </div>
                </main>
                {/*   fazer  rodape... */}
            </div>
        );
    }

});

module.exports = Master;
