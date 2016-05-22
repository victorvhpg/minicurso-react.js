"use strict";

var React = require("react");

var MenuDireita = React.createClass({

    render: function() {
        console.log("render: MenuDireita");

        return (
            <nav className="mdl-navigation  ">
                <button id="demo-menu-lower-right" className="mdl-button mdl-js-button mdl-button--icon">
                    <i className="material-icons">more_vert</i>
                </button>
                <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="demo-menu-lower-right">
                    <li className="mdl-menu__item">
                        teste 1
                    </li>
                    <li className="mdl-menu__item">
                        teste 2
                    </li>
                    <li className="mdl-menu__item">
                        teste 3
                    </li>

                </ul>
            </nav>
        );
    }

});
module.exports = MenuDireita;
