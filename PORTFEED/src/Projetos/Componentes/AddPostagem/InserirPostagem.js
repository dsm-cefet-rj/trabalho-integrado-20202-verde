import React, {useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, connect, useSelector } from 'react-redux';
import { updatePostagemServer,fetchPostagem,addPostagemServer, selectAllPostagem, selectPostagemById} from './SlicePostagem'
import {esquemaPostagem} from 'C:/Users/Eduardo/Documents/GitHub/trabalho-integrado-20202-verde/PORTFEED/src/Projetos/esquemaPostagem.js';
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
    
    
    
    function onSubmit(postagem){
        if(actionType === 'postagem/addPostagem'){
            dispatch(addPostagemServer(postagem));
            history.push('/Feed');
            console.log('adicionou')
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
        history.push('/User');
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

            <div class="form-group">
            <label for="exampleFormControlTextarea1">Oque você está fazendo? Em que está trabalhando?</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">
            <input type="text" id="post" name="post"  defaultValue={postagemOnLoad.post} ref ={register}/>
            </textarea>
            </div>

            <div>
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

export default (InserirPostagem)