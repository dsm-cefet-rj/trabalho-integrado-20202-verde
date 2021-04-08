import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let esquemaProjeto = object().shape(
    {
        id: number(),
        nome: string().required().max(30),
        desc: string().required().max(400),
        info: string().required().max(100),
        
    }
)