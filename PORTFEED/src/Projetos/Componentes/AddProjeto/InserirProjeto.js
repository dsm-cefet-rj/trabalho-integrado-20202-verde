import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, connect, useSelector } from 'react-redux';
import { updateProjetoServer, selectAllProjetos} from './SliceProjeto.js'

    

  function InserirProjeto(props){


    const projetos = useSelector(selectAllProjetos)

    const history = useHistory();
    const dispatch = useDispatch()

    const projetoFound = useSelector(selectAllProjetos)

    const [projeto, setProjeto] = useState(
              projetoFound ?? {});

    const [actionType, ] = useState( 
         projetoFound ? 'projetos/updateProjeto'
            : 'projetos/addProjeto'
            );

    function handleInputChange(e) {
        setProjeto( {...projeto, [e.target.name]: e.target.value} );
    }

    function handleSubmit(e){
        setProjeto(projeto.id = projetos.id)
        e.preventDefault();
        dispatch(updateProjetoServer(projeto));
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
            
            <form onSubmit={handleSubmit}>
            
            <div class = "col-xs-12">
            <label for="username"> Nome do Projeto:
                  <br/>
                  
                  <input type="text" id="name" name="nome" placeholder={props.projetos.nome} value={projeto.nome} onChange={handleInputChange}/>
                  
            </label>
            </div>
            <br/>
            <br/> 
            <div class = "col-xs-12">
                <label for="username">
                    Descrição do Projeto: 
                    <br/>
                    <textarea name ='desc' class= 'txtarea' placeholder={props.projetos.desc} value={projeto.desc} onChange={handleInputChange}/>
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
                  <input type="text" class= 'txtbox' id="name" name="info" placeholder={props.projetos.info} value={projeto.info} onChange={handleInputChange}/>
                  
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
          </div>
);
}

export default connect(state => ({ projetos : state }))(InserirProjeto)