const Express = require('express');
const app = Express();
app.use(Express.json())

class Server {

    _express = app;
    _port = null;

    constructor(port = 3333){
        this._port = port
    };

    LigarServerProduction(){
        app.listen(this._port,() => {
            console.log(`SERVER LIGADO E RODANDO NA PORTA ${this._port}`)
        });
    };

};

module.exports = Server, app


