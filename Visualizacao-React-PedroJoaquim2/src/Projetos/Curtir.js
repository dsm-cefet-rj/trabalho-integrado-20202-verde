import React from 'react';
import ReactDOM from 'react-dom';
import './Curtir.css';
import './Images.css';

//Projeto para o cabeçalho e barra de pesquisa
class Curtir extends React.Component {
   render() {
     return(   
      
   <div class = "linha">
      <input class = "botao" type="image" id = "curtida" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_LER1e7ghQtxhmNIAutyoeykmLvl_JPbqA&usqp=CAU" name="submit" width="60" height="60"  alt="submit"/>
   
 <p class = "col-xs-3"> Curtidas:</p> 
  
  <p class = "col-xs-6" id = "num">3145692312751831</p> 

   </div>
   );
  }
}
ReactDOM.render(
  <Curtir />,
  document.getElementById('root')
);

export default Curtir;