

const {Router}= require('express');
const { usuariosGEt, 
        usuariosPut, 
        usuariosPost, 
        usuariosDelete } = require('../controllers/usuarios');
    
const router =Router();

router.get('/', usuariosGEt );   

router.put('/:id', usuariosPut); 

router.post('/',usuariosPost); 

router.delete('/',usuariosDelete); 


module.exports=router;