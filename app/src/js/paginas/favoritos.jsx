"use strict";
var apiVideo = require("../modulos/api-video");
var ListaVideo = require("../componentes/lista-videos");

var React = require("react");

var Favoritos = React.createClass({

    getInitialState: function() {
        return {
            listVideos: apiVideo.getListFavorito()
        };
    },

    render: function(){
        console.log("render: Favoritos");
        return (
            <div>
                <h4 style={{textAlign: "center"}}>Favoritos</h4>
                <ListaVideo list={this.state.listVideos}/>
                {this.state.listVideos.length === 0 ?
                    <h5>
                        nenhum registro
                    </h5>
                    : null}
                </div>
            );
        }

    });


    module.exports = Favoritos;
