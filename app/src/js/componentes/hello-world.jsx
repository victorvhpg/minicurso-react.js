// var React = require("react");

// var HelloWorld = React.createClass({
//     //estado inicial do componente
//     getInitialState: function () {
//         console.log("getInitialState");
//         return {
//             contador: 0
//         };
//     },
//     //valida as props de um componente
//     propTypes: {
//         mensagemOpcional: React.PropTypes.string,
//         idade: React.PropTypes.number,
//         mensagem: React.PropTypes.string.isRequired
//     },

//     getDefaultProps: function () {
//         console.log("getDefaultProps");
//         return {
//             mensagemOpcional: "sou opcional "
//         };
//     },
    
//     componentWillReceiveProps: function () { console.log('componentWillReceiveProps', arguments); },
//     shouldComponentUpdate: function (nextProps, nextState) { console.log('shouldComponentUpdate', arguments); return true; },
//     componentWillUpdate: function () { console.log('componentWillUpdate', arguments); },
//     componentDidUpdate: function () { console.log('componentDidUpdate', arguments); },
//     componentWillMount: function () { console.log('componentWillMount', arguments); },
//     componentDidMount: function () { console.log('componentDidMount', arguments); },
//     componentWillUnmount: function () { console.log('componentWillUnmount', arguments); },
    
//     aumentarContador: function(){        
//       this.setState({
//           contador: this.state.contador + 1
//       });  
//     },

//     render: function () {
//         console.log("render");
//         var nome = "Exemplo...";
//         return (
//             <div style={{
//                 padding: "10px",
//                 backgroundColor: "yellow"
//             }}>
//                 <h2>exemplo</h2>                
//                   <button onClick={this.aumentarContador} > atualizar contador</button>           
//                 <p>
//                     Valor do Contador: {this.state.contador}                    
//                 </p>                                               
//                 <div>
//                     Valor da mensagem:
//                     {this.props.mensagem}
//                 </div>
//                 <br />
//                 {nome}
//             </div>
//         );
//     }
// });

// module.exports = HelloWorld;
