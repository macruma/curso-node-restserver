
const { request } = require('express');
const {response}=require('express');


const usuariosGEt= (req=request, res =response)=> {

    const {q, nombre= 'No name', apikey, page= 1, limit}= req.query;

    res.json({
        msg:'get API - controlador', 
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usuariosPut=(req, res=response)=> {

    const {id} =req.params;

    res.status(400).json({
        msg:'put API - controlador',
        id
    });
   }

const usuariosPost= (req, res=response)=> {

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg:'post API - controlador',
        nombre, edad
    });
   }

   const usuariosDelete= (req, res)=> {
    res.json({
        msg:'delete API - controlador'
    });
   }

module.exports={
    usuariosGEt,
    usuariosPut,
    usuariosPost,
    usuariosDelete

}