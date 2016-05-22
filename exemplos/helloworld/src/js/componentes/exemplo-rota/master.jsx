var React = require("react");
var Link = require("react-router").Link;
var Master = React.createClass({
        
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  
   navegar: function(){
 
    this.context.router.push({
        pathname: '/usuarios',
        query: {
          teste: "oi"
        }
      });  
       
       
   },     
        
    render: function(){
        console.log("render: master");
        return (
            <div>
                <header>
                <h2>TOPO</h2>
                <nav>
                    <Link to="/">Home</Link> -  
                    <Link to="/sobre">Sobre</Link> - 
                    <Link to="/usuarios">Usuários</Link> -
                    <Link to="/aliens">Aliens</Link> 
                    <button onClick={this.navegar}>teste </button>
                </nav>
              </header>
               <div>
                    {this.props.children}               
               </div>            
               <footer>RODAPE</footer>
            </div>
        );                        
    }
      
});


module.exports = Master;