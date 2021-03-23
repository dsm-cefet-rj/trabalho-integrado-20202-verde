import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';

export default function InserirProjeto(props){

    const [projeto, setProjeto] = useState({});
    const history = useHistory();

    const dispatch = useDispatch()

    function handleInputChange(e) {
        setProjeto( {...projeto, [e.target.name]: e.target.value} );
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch({type: 'salva', payload: projeto})
        history.push('/Projeto');

    }
    return(<>
            <h1>Novo Projeto</h1>
            <form onSubmit={handleSubmit}>
            <label for="username"> Nome do Projeto:
                  <input type="text" id="name" name="projeto" placeholder="TESTE" value={projeto.projeto} onChange={handleInputChange}/>
            </label>
            <br/>
            <label for="username">
            Descrição do Projeto: 
            <textarea id="name" name ='desc' value={projeto.desc} onChange={handleInputChange}/>/>
            </label>
            <br/>
            <input type="submit" value="Salvar" />
            </form>
          </>
);
}