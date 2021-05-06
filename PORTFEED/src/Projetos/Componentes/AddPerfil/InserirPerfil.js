import React, { useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, connect, useSelector } from 'react-redux';
import { updateusuarioServer, fetchUsuario, addusuarioServer, selectAllusuario, selectusuarioById } from './SlicePerfil'
import { esquemaPerfil } from 'C:/Users/pedro/OneDrive/Documentos/GitHub/trabalho-integrado-20202-verde/portfeed/src/Projetos/esquemaPerfil.js';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import store from '../store/GuardaProjeto';

function InserirPerfil(props) {

    const usuarios = useSelector(selectAllusuario)

    const history = useHistory();
    const dispatch = useDispatch()

    let { id } = useParams();

    var titulo;

    const usuarioFound = useSelector(state => selectusuarioById(state, id))

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(esquemaPerfil)
    });

    const [usuarioOnLoad] = useState(
        id ? usuarioFound ?? esquemaPerfil.cast({}) : esquemaPerfil.cast({}));

    const [actionType,] = useState(
        usuarioFound ? 'usuario/updateusuario'
            : 'usuario/addusuario'
    );

    if (actionType === 'usuario/addusuario') {
        titulo = 'Crie seu Perfil'
    }
    else {
        titulo = 'Editar Perfil'
    }



    function onSubmit(usuario) {
        if (actionType === 'usuario/addusuario') {
            dispatch(addusuarioServer(usuario));
            history.push('/Feed');
            console.log('adicionou')
        } else {
            console.log('atualizou')
            dispatch(updateusuarioServer({ ...usuario, id: usuarioFound.id }));
            <Link to={`/User/${usuario.id}`}> </Link>
            dispatch(fetchUsuario())
        }
        document.documentElement.scrollTop = 0;
    }

    function cancela() {
        history.push('/Feed');
        document.documentElement.scrollTop = 0;
    }

    return (<div>
        <h1>{titulo}</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

            <div class="col-xs-12">
                <label > Nome do usuario:
            <span> {errors.nome?.message}</span>
                    <br />
                    <input type="text" id="name" name="nome" class = "nome_perfil" defaultValue={usuarioOnLoad.nome} ref={register} />
                </label>
            </div>
            <br />
            <br />
            <div class="col-xs-12">
                <label > Bio:
            <span> {errors.bio?.message}</span>
                    <br />
                    <input type="text" class='txtbox bio_perfil' id="name" name="bio" defaultValue={usuarioOnLoad.bio} ref={register} />
                </label>
            </div>
            <br />
            <div class="col-xs-12">
                <label> Áreas de Atuação:
            <span> {errors.areaAt?.message}</span>
                    <br />
                    <input type="text" class='txtbox areaAt_perfil' id="name" name="areaAt" defaultValue={usuarioOnLoad.areaAt} ref={register} />

                </label>
            </div>
            <br />


            <div >
                <div class="col-xs-6">
                    <input type="submit" value="Salvar" name='salva' />
                </div>
                <div class="col-xs-6">
                    <input type="submit" value="Cancelar" name='cancela' onClick={cancela} />

                </div>
            </div>
        </form>
        <div class='fant'>
            <input type="text" class='fant' name="usuario" defaultValue={CheckUser()} ref={register} />
        </div>

    </div>
    );
}

function CheckUser() {
    const [users, setUsers] = React.useState(null);
    const dispatch = useDispatch();

    var nome;

    return (store.getState().logins.user)
}

export default (InserirPerfil)