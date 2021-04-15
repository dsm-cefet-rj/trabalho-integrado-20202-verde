import React, {useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, connect, useSelector } from 'react-redux';
import { updateProjetoServer,addProjetoServer, selectAllProjetos, selectProjetosById} from './SliceProjeto.js'
import {esquemaProjeto} from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/portfeed/src/Projetos/esquemaProjeto.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
    

  function InserirProjeto(props){


    const projetos = useSelector(selectAllProjetos)

    const history = useHistory();
    const dispatch = useDispatch()

    let { id } = useParams();
    

    const projetoFound = useSelector(state => selectProjetosById(state, id))

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(esquemaProjeto)
    });

    const [projetoOnLoad] = useState(
        id ? projetoFound ?? esquemaProjeto.cast({}): esquemaProjeto.cast({}));

    const [actionType, ] = useState( 
         projetoFound ? 'projetos/updateProjeto'
            : 'projetos/addProjeto'
            );
    
    if(actionType === 'projetos/addProjeto'){
    console.log('Teste add')
    }
    else   
    { 
    console.log('Teste upd')
    }
    
    function onSubmit(projeto){
        if(actionType === 'projetos/addProjeto'){
            dispatch(addProjetoServer(projeto));
            history.push('/Feed');
            console.log('adicionou')
        }else{
            console.log(projetoFound.nome + ' ' + projetoFound.desc + '' + projetoFound.id)
            dispatch(updateProjetoServer({...projeto, id:projetoFound.id }));
            history.push('/Projeto/'+ id);
            console.log('atualizou')
        }
        document.documentElement.scrollTop = 0; 
    }

    function cancela()
    { 
        history.push('/');
        document.documentElement.scrollTop = 0; 
    }

    return(<div>
            <h1>Editar Projeto</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <div class = "col-xs-12">
            <label for="username"> Nome do Projeto:
            <span> {errors.nome?.message}</span>
                  <br/>
                  <input type="text" id="name" name="nome"  defaultValue={projetoOnLoad.nome} ref ={register}/>
            </label>
            </div>
            <br/>
            <br/> 
            <div class = "col-xs-12">
                <label for="username">
                    Descrição do Projeto: 
                    <span> {errors.desc?.message}</span>
                    <br/>
                    <textarea name ='desc' class= 'txtarea' defaultValue={projetoOnLoad.desc} ref ={register}/>
                </label>
            </div>
            <br/>

            <div >
              <img  class="divimagem img-responsive"   src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plus_font_awesome.svg/512px-Plus_font_awesome.svg.png" alt="Imagem"></img>
            </div>
            <br/>
            <div class = "col-xs-12">
            <label for="username"> Informações Extras:
            <span> {errors.info?.message}</span>
                  <br/>
                  <input type="text" class= 'txtbox' id="name" name="info"   defaultValue={projetoOnLoad.info} ref ={register}/>
                  
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

export default (InserirProjeto)