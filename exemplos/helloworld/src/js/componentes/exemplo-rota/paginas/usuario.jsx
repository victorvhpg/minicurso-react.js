var React = require("react");
var Usuario = React.createClass({        
    render: function(){
        console.log("render: Usuario");
        console.log(this.props.location.query.parametroTeste)
        return (
            <div>                
                <h4>VER Usuário id = {this.props.params.id}</h4>                        
            </div>
        );                        
    }      
});
module.exports = Usuario;