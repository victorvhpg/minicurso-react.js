"use strict";


var React = require("react");
var Link = require("react-router").Link;
var ItemVideo = require("./item-video");



var ListaVideo = React.createClass({

    propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.string)
    },

    //estado inicial do componente
    getInitialState: function () {
        console.log("getInitialState");
        return {

        };
    },

    render: function () {

        return (
            <div className="lista-video">
                {this.props.list.map(function (videoId) {
                    return (
                        <ItemVideo
                            key={videoId}
                            id={videoId}
                            />
                    );
                })}
            
            </div>
        );

    }
});

module.exports = ListaVideo;
