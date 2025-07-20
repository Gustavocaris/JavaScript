import express, { response } from 'express';

const app = express();

// na nossa rota: Tipo e o endereço
app.get('/usuarios',(request,response) => {
    app.send('Teste de comunicacao');
})

app.listen(3000);