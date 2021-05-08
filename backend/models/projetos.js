const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const normalize = require('normalize-mongoose');

const projetoSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    
    id:{
        type: String,
        ref: 'id'
    },
    usuario:{
        type: String,
        required: true
    },
    /*,
    idusuario:{
        type: String,
        required: true
    }*/
    
})


projetoSchema.plugin(normalize);

var Projetos = mongoose.model('Projeto', projetoSchema);

module.exports = Projetos;