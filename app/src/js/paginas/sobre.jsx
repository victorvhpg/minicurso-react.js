"use strict";

var React = require("react");

var Sobre = React.createClass({

    render: function () {
        console.log("render: Sobre");
        return (
            <div style={{ textAlign: "center" }} >

                <h4 >Sobre</h4>

                <h4>
                    INFOESTE 2016
                </h4>

                <h4>
                    Aplicações JavaScript de alta performance com React.js <br />
                    @victorvhpg
                </h4>
            </div>
        );
    }

});


module.exports = Sobre;
