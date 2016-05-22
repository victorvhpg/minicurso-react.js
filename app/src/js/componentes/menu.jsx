"use strict";

var React = require("react");
var Link = require("react-router").Link;


var Menu = React.createClass({
    //estado inicial do componente
    getInitialState: function() {
        console.log("getInitialState");
        return {};
    },

    esconderMenu: function(){
        var d = document.querySelector(".mdl-master-div");
        d.MaterialLayout.toggleDrawer();
    },

    render: function() {

        return (
            <div className="mdl-layout__drawer">
                <div className="mdl-layout-title mdl-color--indigo-500 mdl-color-text--white">
                    App Vídeos React.js

                </div>
                <nav className="mdl-list list-menu">
                    <Link
                        onClick={this.esconderMenu}
                        className="mdl-list__item"
                        to="/minicurso-react.js/app/build/">
                        <span className="mdl-list__item-primary-content">
                            <i className="material-icons mdl-list__item-icon">home</i>
                            Início
                        </span>
                    </Link>

                    <Link
                        onClick={this.esconderMenu}
                        className="mdl-list__item"
                        to="/minicurso-react.js/app/build/favoritos">
                        <span className="mdl-list__item-primary-content">
                            <i className="material-icons mdl-list__item-icon">favorite</i>
                            Favoritos
                        </span>
                    </Link>
                    <Link
                        onClick={this.esconderMenu}
                        className="mdl-list__item"
                        to="/minicurso-react.js/app/build/aliens">
                        <span className="mdl-list__item-primary-content">
                            <i className="material-icons mdl-list__item-icon">bug_report</i>
                            Aliens
                        </span>
                    </Link>
                    <Link
                        onClick={this.esconderMenu}
                        className="mdl-list__item"
                        to="/minicurso-react.js/app/build/sobre">
                        <span className="mdl-list__item-primary-content">
                            <i className="material-icons mdl-list__item-icon">info</i>
                            Sobre
                        </span>
                    </Link>
                </nav>
            </div>
        );
    }
});

module.exports = Menu;
