import React from 'react';

//Projeto para o cabeçalho e barra de pesquisa
function Baixo(props){
     return(   
    <div>
    <div>
    <p class = "texto">Mais Informações: {props.InfoProjeto.Info}</p>
    </div>
    
   <div>
    <p>TAGs : <mark>PROGRAMAÇÃO</mark>  <mark>PROJETOS</mark>  <mark>HTML</mark> <mark>CSS</mark> <mark>FACULDADE</mark> <mark>REACT</mark></p>
    </div>

   <div class = "linha">
      <input class = "botao" type="image" id = "curtida" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_LER1e7ghQtxhmNIAutyoeykmLvl_JPbqA&usqp=CAU" name="submit" width="60" height="60"  alt="submit"/>
   
 <p class = "col-xs-3"> Curtidas:</p> 
  
  <p class = "col-xs-6" id = "num">3145692312751831</p> 

   </div>
   </div>
   );
}


export default Baixo;