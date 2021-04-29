import React, {useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, connect, useSelector } from 'react-redux';
import { updatePostagemServer,fetchPostagem,addPostagemServer, selectAllPostagem, selectPostagemById} from './SlicePostagem'
import {esquemaPostagem} from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/portfeed/src/Projetos/esquemaPostagem.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
    
function InserirPostagem(props){

    const postagem = useSelector(selectAllPostagem)

    const history = useHistory();
    const dispatch = useDispatch()

    let { id } = useParams();
    

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
            console.log('adicionou');
            dispatch(addPostagemServer(postagem));
            history.push('/Feed');
        }else{
            console.log('atualizou')
            dispatch(updatePostagemServer({...postagem, id:postagemFound.id }));
            history.push('/Postagem/'+ id );
            dispatch(fetchPostagem())
        }
        document.documentElement.scrollTop = 0; 
    }

    function cancela()
    { 
        history.push('/Feed');
        document.documentElement.scrollTop = 0; 
    }
    
    var titulo;
    if(actionType === 'projetos/addPostagem')
    {
        titulo = 'Faça seu Post'
    }
    else
    {
        titulo = 'Edite seu Post'
    }



    return(
        <div> 
        <form onSubmit={handleSubmit(onSubmit)}>

            
            <label for="exampleFormControlTextarea1">O que esta pensando?</label>
            <textarea name ='desc' class= 'txtarea' defaultValue={postagemOnLoad.post} ref ={register}/>
        

            <div>
            <div class = "col-xs-6">
            <input type="submit" value="Salvar" name = 'salva' />
            </div>
            <div class = "col-xs-6">
            <input type="submit" value="Cancelar" name = 'salva' onClick={cancela}/> 
            </div>
            </div>

        </form>
        </div>
    );
}

export default (InserirPostagem)