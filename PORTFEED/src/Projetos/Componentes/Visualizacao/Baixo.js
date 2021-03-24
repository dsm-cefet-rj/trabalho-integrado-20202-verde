import React , { useState } from 'react';
import { connect } from 'react-redux';
import {Link} from "react-router-dom"

//Projeto para o cabeçalho e barra de pesquisa
function Baixo({projetos}){

  const [curt,setCurt] = useState(()=> {return 0})

  function Curte()
  {
    setCurt(priCurt =>  priCurt + 1)
  }
  function edita()
{
     document.documentElement.scrollTop = 0
}


     return( <>
    
    <div>
    {projetos.map(descricao => 
    (  
      <div>
    <div class = "col-xs-12">
    <p class = "texto text-justify">Mais Informações: {descricao.info}</p>
    </div>
    
   <div>
    <p>TAGs : <mark>PROGRAMAÇÃO</mark>  <mark>PROJETOS</mark>  <mark>HTML</mark> <mark>CSS</mark> <mark>FACULDADE</mark> <mark>REACT</mark></p>
    </div>

   <div class = "linha">
      <input class = "botao" type="image" id = "curtida" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_LER1e7ghQtxhmNIAutyoeykmLvl_JPbqA&usqp=CAU" name="submit" width="60" height="60"  alt="submit" onClick={Curte}/>

 <p class = "col-xs-3"> Curtidas:</p> 
  
  <p class = "col-xs-6" id = "num">{curt}</p> 
</div>
 <div class = "col-xs-6">
 <Link to ="/Edita">
  <input type="submit" value="Editar" name = 'salva' Onclick = {edita()} />
     
     </Link>
      </div>
   </div>
    ))}
   </div>
   </>
   );

}


export default  connect(state => ({ projetos : state }))(Baixo);