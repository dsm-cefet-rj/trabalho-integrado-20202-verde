import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, connect } from 'react-redux';
import { updateProjeto } from './SliceProjeto.js'


  function InserirProjeto({projetos}){

    const [projeto, setProjeto] = useState({});
    const history = useHistory();

    const dispatch = useDispatch()

    function handleInputChange(e) {
        setProjeto( {...projeto, [e.target.name]: e.target.value} );
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.name);
        dispatch(updateProjeto(projeto));
        history.push('/Projeto');
        document.documentElement.scrollTop = 0; 
    }

    function cancela()
    { 
        history.push('/Projeto');
        document.documentElement.scrollTop = 0; 
    }

    return(<div>
            <h1>Editar Projeto</h1>
            {projetos.map(descricao => 
                  (
            <form onSubmit={handleSubmit}>
            
            <div class = "col-xs-12">
            <label for="username"> Nome do Projeto:
                  <br/>
                  
                  <input type="text" id="name" name="projeto" placeholder={descricao.projeto} value={projetos.projeto} onChange={handleInputChange}/>
                  
            </label>
            </div>
            <br/>
            <br/> 
            <div class = "col-xs-12">
                <label for="username">
                    Descrição do Projeto: 
                    <br/>
                    <textarea name ='desc' class= 'txtarea' placeholder={descricao.desc} value={projetos.desc} onChange={handleInputChange}/>
                </label>
            </div>
            <br/>

            <div >
              <img  class="divimagem img-responsive"   src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plus_font_awesome.svg/512px-Plus_font_awesome.svg.png" alt="Imagem"></img>
            </div>
            <br/>
            <div class = "col-xs-12">
            <label for="username"> Informações Extras:
                  <br/>
                  <input type="text" class= 'txtbox' id="name" name="info" placeholder={descricao.info} value={projetos.info} onChange={handleInputChange}/>
                  
            </label>
            </div>
            <br/>


            <div >
            <div class = "col-xs-6">
            <input type="submit" value="Salvar" name = 'salva'/>
            </div>
            <div class = "col-xs-6">
                <input type="submit" value="Cancelar" name = 'salva' onClick={cancela}/>
             
             </div>
            </div>
            </form>
            ))}
          </div>
);
}

export default connect(state => ({ projetos : state }))(InserirProjeto)