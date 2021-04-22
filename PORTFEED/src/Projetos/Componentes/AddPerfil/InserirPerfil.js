import React, {useState} from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, connect, useSelector } from 'react-redux';
import { updateusuarioServer,fetchUsuario,addusuarioServer, selectAllusuario, selectusuarioById} from './SlicePerfil'
import {esquemaPerfil} from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/portfeed/src/Projetos/esquemaPerfil.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
    

  function InserirPerfil(props){

    const usuarios = useSelector(selectAllusuario)

    const history = useHistory();
    const dispatch = useDispatch()

    let { id } = useParams();
    
    var titulo;

    const usuarioFound = useSelector(state => selectusuarioById(state, id))

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(esquemaPerfil)
    });

    const [usuarioOnLoad] = useState(
        id ? usuarioFound ?? esquemaPerfil.cast({}): esquemaPerfil.cast({}));

    const [actionType, ] = useState( 
         usuarioFound ? 'usuario/updateusuario'
            : 'usuario/addusuario'
            );
    
    
    
    function onSubmit(usuario){
        if(actionType === 'usuario/addusuario'){
            dispatch(addusuarioServer(usuario));
            history.push('/Feed');
            console.log('adicionou')
        }else{
            console.log('atualizou')
            dispatch(updateusuarioServer({...usuario, id:usuarioFound.id }));
            history.push('/User/6081d0870b778b57b06f1923');
            dispatch(fetchUsuario())
        }
        document.documentElement.scrollTop = 0; 
    }

    function cancela()
    { 
        history.push('/User/6081d0870b778b57b06f1923');
        document.documentElement.scrollTop = 0; 
    }

    return(<div>
            <h1>{titulo}</h1>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            
            <div class = "col-xs-12">
            <label > Nome do usuario:
            <span> {errors.nome?.message}</span>
                  <br/>
                  <input type="text" id="name" name="nome"  defaultValue={usuarioOnLoad.nome} ref ={register}/>
            </label>
            </div>
            <br/>
            <br/> 
            <div class = "col-xs-12">
            <label > Bio:
            <span> {errors.bio?.message}</span>
                  <br/>
                  <input type="text" class= 'txtbox' id="name" name="bio"  defaultValue={usuarioOnLoad.bio} ref ={register}/>
            </label>
            </div>
            <br/>
            <div class = "col-xs-12">
            <label> Áreas de Atuação:
            <span> {errors.areaAt?.message}</span>
                  <br/>
                  <input type="text" class= 'txtbox' id="name" name="areaAt"   defaultValue={usuarioOnLoad.areaAt} ref ={register}/>
                  
            </label>
            </div>
            <br/>


            <div >
            <div class = "col-xs-6">
            <input type="submit" value="Salvar" name = 'salva' />
            </div>
            <div class = "col-xs-6">
                <input type="submit" value="Cancelar" name = 'cancela' onClick={cancela}/>
             
             </div>
            </div>
            </form>
            <div class= 'fant'>
            <input type="text" class= 'fant'  name="usuario"   defaultValue={CheckUser()} ref ={register}/>
            </div>

          </div>
);
}

function CheckUser()
    {
        const [users, setUsers] = React.useState(null);
        const dispatch = useDispatch();

        var nome;

        console.log(users)
        React.useEffect(() => {
        if (!users){
        fetch("http://localhost:3004/users").then(x =>
            x.json().then(y => {
                setUsers(y.name);
            })
        );
    }
    
  }, [users,dispatch]);

     return ( users )
}

export default (InserirPerfil)