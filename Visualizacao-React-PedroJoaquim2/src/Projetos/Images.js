import React from 'react';
import ReactDOM from 'react-dom';
import './Images.css';

//Projeto para o cabeçalho e barra de pesquisa
class Images extends React.Component {
   render() {
     return(   
    <div>
    <div class="linha ">
          <div class="coluna">
            <img class="img-responsive"    src="https://incuca.net/wp-content/uploads/2018/05/gestao-de-projetos.jpg" alt="Imagem"></img>
          </div>
          <div class="coluna">
            <img  class="img-responsive"    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB43iQpS2XkQP7kKp_Mlw38Ctdz8Apqo52ag&usqp=CAU" alt="Imagem"></img>
          </div>  
        </div>
        
        <div class="linha">
          <div class="coluna">
            <img  class="img-responsive"  src="https://blog.aevo.com.br/wp-content/uploads/2017/05/aprenda-como-construir-do-zero-um-modelo-de-projeto-eficiente.jpeg" alt="Imagem"></img>
          </div>
          <div class="coluna">
            <img  class="img-responsive"    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AvFUX-UP-EeLrHeZxq49hwN1FSQMkfu95w&usqp=CAU" alt="Imagem"></img>
          </div>  
        </div>
        </div>
   );
  }
}
ReactDOM.render(
  <Images />,
  document.getElementById('root')
);

export default Images;