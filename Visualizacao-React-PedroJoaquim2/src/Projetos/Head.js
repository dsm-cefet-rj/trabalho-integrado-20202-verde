import React from 'react';
import ReactDOM from 'react-dom';
import './Head.css';

//Projeto para o cabeçalho e barra de pesquisa
class Head extends React.Component {
   render() {
     return(   
    <div className= "page-header">
      <form className="form-horizontal">
        <div className="container">
          <div className = "form-group row" >
              <a href= "https://Feed-React-EduMoura.webuono.repl.co" target="_blank" rel ="noopener noreferrer"> 
              <label className = "col-xs-6 header"> PORT-FEED</label></a>
              <div className = "col-xs-6">
              <input type="text" className="form-control " placeholder="Pesquisa"/>
          </div>
          </div>
        </div>
      </form>
    </div>
   );
  }
}
ReactDOM.render(
  <Head />,
  document.getElementById('root')
);

export default Head;