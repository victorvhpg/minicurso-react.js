"use strict";

var React = require("react");
var apiVideo = require("../modulos/api-video");
var ListaVideo = require("../componentes/lista-videos");

var Home = React.createClass({

    getInitialState: function() {
        return {
            paginacaoIndice: 0,
            carregandoList: false,
            listVideos: []
        };
    },

    componentDidMount: function() {
        this.carregarListVideo();
    },

    carregarListVideo: function() {
        if (this.state.carregandoList) {
            return;
        }
        this.setState({carregandoList: true});
        console.log(this.state.paginacaoIndice);
        apiVideo.getListVideo(this.state.paginacaoIndice).then(function(list) {
            this.setState({
                paginacaoIndice: this.state.paginacaoIndice + 1,
                carregandoList: false,
                listVideos: this.state.listVideos.concat(list)
            });
        }.bind(this)).catch(function(e) {
            console.log(e);
            alert("Erro ao obter videos");
            this.setState({carregandoList: false});
        }.bind(this));
    },

    render: function() {
        console.log("render: Home");
        return (
            <div>

                <h4 style={{
                        textAlign: "center"
                    }}>
                    Todos os Vídeos
                </h4>

                <ListaVideo list={this.state.listVideos}/>

                <div style={{
                        padding: "30px",
                        textAlign: "center"
                    }}>
                    <button
                        style={{
                            width: "50%"
                        }}
                        onClick={this.carregarListVideo}
                        className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                        {!this.state.carregandoList
                            ? "Carregar Mais"
                            : "Carregando..."}
                        </button>

                    </div>
                </div>
            );
        }

    });

    module.exports = Home;
