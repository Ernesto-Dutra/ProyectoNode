const express = require('express');

const app = express();


app.use((req, res, next) => {
        res.status(200).send({
            mensagem: 'Olá meu corpinho, consegui montar meu server'
        });
});

module.exports = app;