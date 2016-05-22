"use strict";

var React = require("react");
var MenuDireita = require("./menu-direita");

var Topo = React.createClass({
    //estado inicial do componente
    getInitialState: function () {
        console.log("getInitialState");
        return {

        };
    },

    render: function () {
        return (
            <header
                className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    {/*icone menu*/}
                    <span className="mdl-layout-title">
                        App Vídeos React.js
                    </span>
                    <div className="mdl-layout-spacer">
                    </div>
                    <MenuDireita  />
                </div>
            </header>
        );
    }
});

module.exports = Topo;
