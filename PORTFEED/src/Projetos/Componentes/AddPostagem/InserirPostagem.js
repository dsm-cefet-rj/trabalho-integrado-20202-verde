import React, {useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, connect, useSelector } from 'react-redux';
import { updatePostagemServer,fetchPostagem,addPostagemServer, selectAllPostagem, selectPostagemById} from './SlicePostagem'
import {esquemaPostagem} from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/portfeed/src/Projetos/esquemaPostagem.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import store from '../store/GuardaProjeto';

function InserirPostagem(props){

    const history = useHistory();
    const dispatch = useDispatch()

    let {id} = useParams();
    
    const postagemFound = useSelector(state => selectPostagemById(state, id))

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(esquemaPostagem)
    });

    const [postagemOnLoad] = useState(
        id ? postagemFound ?? esquemaPostagem.cast({}): esquemaPostagem.cast({}));

    const [actionType, ] = useState( 
        postagemFound ? 'postagem/updatePostagem'
            : 'postagem/addPostagem'
          );
    
    console.log(actionType);
    
    function onSubmit(postagem){
        if(actionType === 'postagem/addPostagem'){
            console.log('adicionou')
            dispatch(addPostagemServer(postagem));
            history.push('/FeedPost');
        }else{
            console.log('atualizou')
            dispatch(updatePostagemServer({...postagem, id: postagemFound.id }));
            dispatch(fetchPostagem())
            history.push('/FeedPost');
        }
        document.documentElement.scrollTop = 0; 
        
    }

    function cancela()
    { 
        history.push('/FeedPost');
        document.documentElement.scrollTop = 0; 
    }
    
    var titulo;
    if(actionType === 'postagem/addPostagem')
    {
        titulo = 'Faça seu Post'
    }
    else
    {
        titulo = 'Edite seu Post'
    }



    return(
        <div className = "container">
        <h1>{titulo}</h1> 
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
            <label>
                Oque você está fazendo? Em que está trabalhando?
            </label>
            <div>
            <label>
            <div className = "container">
            <input type="text" className= 'txtbox postagem' id="post" name="post"  defaultValue={postagemOnLoad.post} ref ={register}/>
            </div>
            </label>
            
            </div>
            </div>
            <div>
            <div className = "col-xs-3">
            <input type="submit" value="Salvar" name = 'salva'/>

            </div>
            <div className = "col-xs-3">
            <input type="submit" value="Cancelar" name = 'salva' onClick={cancela}/> 
            </div>
            </div>

        </form>
        <div class= 'fant'>
            <input type="text" class= 'fant'  name="usuario"  defaultValue={CheckUser()} ref ={register}/>
            </div>
        </div>
    );
}

function CheckUser()
    {
        const [users, setUsers] = React.useState(null);
        const dispatch = useDispatch();
        var nome;

     return ( store.getState().logins.user )
}

export default (InserirPostagem)