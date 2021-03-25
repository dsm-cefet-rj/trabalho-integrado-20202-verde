import { string,object,number,setLocale,ref} from 'yup';
import {ptForm} from yup-locale-ptForm;

setLocale(ptForm)

const numericMsg="O campo deve conter um numero."
const menorUnTotais="O campo deve ser menor ou igual a unidades totais"

export let projetoSchema=object().shape(
    {
        nome:string().required().max(30),
        titulo:string().required().max(100)
    }
)