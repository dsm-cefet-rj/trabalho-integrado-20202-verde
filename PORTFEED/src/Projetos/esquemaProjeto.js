import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let esquemaProjeto = object().shape(
    {
        id: string(),
        nome: string().required().max(50),
        desc: string().required().max(1000),
        info: string().required().max(400),
        
    }
)