const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const normalize = require('normalize-mongoose');

const usuarioSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        required: true,
    },
    areaAt: {
        type: String,
        required: true,
    },
    
    id:{
        type: String,
        ref: 'id'
    },
    /*
    usuario:{
        type: String,
        required: true
    }
    */
})

usuarioSchema.plugin(normalize);

var Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;