

const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port= process.env.PORT;
        this.usuariosPath= '/api/usuarios';

        //Middlewares son para darle otra funcionalidad a una web server
        this.middleware();

        //Rutras de la aplicacion
        this.routes();      
    }
    
    //directorio publico
    middleware(){
        //cors
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'))
    }
    routes(){        
           this.app.use( this.usuariosPath, require('../routes/usuarios'));
    }
    listen(){        
          this.app.listen(this.port,()=>{
               console.log('Servidor corridendo en puerto', this.port);
           });
    }

}

module.exports=Server;