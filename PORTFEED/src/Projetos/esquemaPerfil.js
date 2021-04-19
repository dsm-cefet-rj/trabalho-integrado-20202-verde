import {string, object, number, setLocale} from 'yup';
import { ptForm } from 'yup-locale-pt';

setLocale(ptForm)

export let esquemaPerfil = object().shape(
    {
        id: string(),
        nome: string(),
        bio: string(),
        areaAT: string()
    }
)