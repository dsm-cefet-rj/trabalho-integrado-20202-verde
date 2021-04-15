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
    }
    
})

/*
projetoSchema.method('transform', function (){
var obj = this.toObject();

obj.id = obj._id;
delete obj._id;

return obj;
})
*/
projetoSchema.plugin(normalize);

var Projetos = mongoose.model('Projeto', projetoSchema);

module.exports = Projetos;