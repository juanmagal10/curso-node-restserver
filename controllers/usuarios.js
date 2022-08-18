const {response, request}=require('express')


const usuariosGet = (req=request, res = response) => {
    const {q, nombre='no name', apikey, page=1, limit} = req.query;
    
            res.json({
                msg: 'get APi - controlador', 
                nombre, q, apikey, page, limit
        })
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
            res.status(201).json({
                msg: 'post APi - controlador', 
                nombre, edad
        })
              }

const usuariosPut = (req, res = response) => {
    const { id } = req.params
    

            res.json({
                msg: 'put APi - controller', 
                id
        })
              }

const usuariosPatch =(req, res) =>{
            res.json({
                msg:'patch APi - controller'
        })
        }

const usuariosDelete=(req, res=response) =>{
            res.json({
                msg:'delete APi - controller'
        })
        }
        

module.exports = {
    usuariosGet, 
    usuariosPost, 
    usuariosPut, 
    usuariosDelete, 
    usuariosPatch
}