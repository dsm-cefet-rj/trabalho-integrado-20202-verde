import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useForm } from "react-hook-form";
import {userServer} from './UserSlice';
import {loginServer, signupServer} from './UserSlice';

function UserForm(props){


    const history = useHistory();
    const dispatch = useDispatch()
    
    var titulo;

    const { register, handleSubmit, errors } = useForm({
        
    });

   

    const actionType = window.location.href;
    console.log(actionType);
    
    
    function onSubmit(user){
        if (actionType == 'http://localhost:3000/Registrar')
        {
            dispatch(signupServer(user))
            setTimeout(() => {
                dispatch(loginServer(user));
                setTimeout(() => { history.push('/Cria');},100);
            }, 500);
        }else
        {
            dispatch(loginServer(user));
            setTimeout(() => {
                history.push('/');
            }, 500);
        }
        document.documentElement.scrollTop = 0; 
    }


    return(<div>
            <h1>{titulo}</h1>
            
            <div class="login_div">
            <form class="login_form" onSubmit={handleSubmit(onSubmit)}>
            
            <div class = "col-xs-12">
            <label > Usuário:
                  <br/>
                  <input type="text" id="name" name="username" class = "username" ref ={register}/>
            </label>
            </div>
            <br/>
            <br/> 
            <div class = "col-xs-12">
            <label > Senha:
                  <br/>
                  <input type="password" id="name" name="password" class = "password" ref ={register}/>
            </label>
            </div>
            <br/>

            <div class = "col-xs-6">
            <input type="submit" value="Salvar" name = 'salva' />
            </div>
            </form>
            </div>
          </div>
);
}


export default (UserForm)