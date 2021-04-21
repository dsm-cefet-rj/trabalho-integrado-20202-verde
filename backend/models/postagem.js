const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const normalize = require('normalize-mongoose');

const postagemSchema = new Schema({
    post: {
        type: String,
        required: true,
    },
    id:{
        type: String,
        ref: 'id'
    }
})

postagemSchema.plugin(normalize);

var Postagem = mongoose.model('Postagem', postagemSchema);

module.exports = Postagem;