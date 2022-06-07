const nombreUsuario = require("../db/users");
const usuario = require ("../db/users");
const router = require("../routes");
const User = require('../database/models/Users');
const bcrypt = require('bcryptjs');


const usuarioController = {
    usuario: function(req,res){
        return res.render ("profile", {usuarios: nombreUsuario.lista});
    },

    registro: function(req,res){
        return res.render ("registro",  {error: false});
    },

    registrar: function(req,res){

        User.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            usuario: req.body.usuario,
            contrasena: bcrypt.hashSync(req.body.contrasena, 12),
            fecha_nacimiento: req.body.fecha_nacimiento,
            dni:  req.body.dni,
            email:  req.body.email,
            imagen: 'http//'
        })
        .then(resultado => {
            return res.render("login", {error: false, registro: true});
        })
        .catch(error => {
            return res.render("registro", {error: true});
        });
    },

    login: function(req,res){
        return res.render ("login", {error: false});
    },

    loguear: function(req,res){

        let usuario = req.query.usuario;
        let contrasena = req.query.contrasena;
        let usuarioLog;

        for(let i=0; i<nombreUsuario.lista.length; i++){

            let user = nombreUsuario.lista[i];

            if(user.contrasena == contrasena && user.Usuario == usuario){
                usuarioLog = user; 
            }
        }
        
        if(usuarioLog){
            return res.render('editar-usuario', {usuario: usuarioLog});
        }
        else{
            res.render('login', {error: 'usuario o contraseña invalida'});
        }
    },

    editarUser: function(req,res){
        return res.render ("editar-usuario", {usuarios: nombreUsuario.lista});
    }
}

module.exports = usuarioController;

