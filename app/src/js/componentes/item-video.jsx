"use strict";


var React = require("react");
var Link = require("react-router").Link;
var apiVideo = require("../modulos/api-video");

var ItemVideo = React.createClass({

    propTypes: {
        id: React.PropTypes.string.isRequired
    },

    //estado inicial do componente
    getInitialState: function () {
        return {
            src: "",
            executando: false,
            carregando: true,
            descricao: "",
            isFavorito: apiVideo.isFavorito(this.props.id)
        };
    },

    componentDidMount: function () {
        apiVideo.getVideoFB(this.props.id).then(function (resposta) {
            this.setState({
                src: resposta.source,
                descricao: resposta.description
            });
        }.bind(this)).catch(function () {
            alert("erro ao obter video");
        });
    },

    onFavorito: function () {
        //remover
        if (this.state.isFavorito) {
            apiVideo.removeFavorito(this.props.id).then(function () {
                this.setState({
                    isFavorito: false
                });
            }.bind(this)).catch(function () {
                alert("Erro ao remover favorito");
            });
            return;
        }
        //add
        apiVideo.addFavorito(this.props.id).then(function () {
            this.setState({
                isFavorito: true
            });
        }.bind(this)).catch(function () {
            alert("Erro  favorito");
        });

    },

    onPlay: function () {
        this.refs.tagVideo.play();
        this.refs.tagVideo.controls = true;
        this.setState({
            executando: true
        });
    },

    onPauseVideo: function () {
        this.refs.tagVideo.controls = false;
        this.setState({
            executando: false
        });
    },

    render: function () {
        return (
            <div className="item-video mdl-card mdl-shadow--2dp">
                <div style={{
                        position: "relative",
                        backgroundColor: "#000"
                    }}>
                    <video
                        onPause={this.onPauseVideo}
                        onEnded={this.onPauseVideo}
                        ref="tagVideo"
                        src={this.state.src}
                        poster={"https://graph.facebook.com/" + this.props.id + "/picture"} >
                    </video>
                    <div style={{
                            display: (this.state.executando ? "none" : "block"),
                            position: "absolute",
                            textAlign: "center",
                            width: "100%",
                            top: "30%"

                        }}>
                        <button
                            onClick={this.onPlay}
                            style={{
                                width: "90px",
                                height: "60px"
                            }}
                            className="mdl-button mdl-js-button mdl-js-ripple-effect">
                            <img
                                src="./img/play.png"
                                style={{
                                    width: "100%"
                                }} />
                            </button>
                        </div>
                    </div>
                    <div className="mdl-card__supporting-text">
                        {this.state.descricao}
                    </div>

                    <div className="mdl-card__actions mdl-card--border">
                        <button
                            onClick={this.onFavorito}
                            style={{

                            }}
                            className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                            <i
                                className="material-icons"
                                style={{ color: this.state.isFavorito ? "red" : "#ccc" }}>favorite</i>
                        </button>
                    </div>

                </div>
            );

        }
    });

    module.exports = ItemVideo;
