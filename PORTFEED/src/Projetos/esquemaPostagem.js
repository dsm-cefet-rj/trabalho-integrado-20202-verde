import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let esquemaPostagem = object().shape(
    {
        id: string(),
        post: string().required().max(200),
        
        
    }
)