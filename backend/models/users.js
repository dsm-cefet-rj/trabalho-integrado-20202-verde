var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    /* 
    username:{
        type:String,
        unique: true
    }
    password:{
        type:String,
        required: true
    }
    */
    admin:{
        type: Boolean,
        default: false
    },
    idperfil:{
        type:String,
        required: false
    }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);