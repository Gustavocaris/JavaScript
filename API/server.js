import express, { response } from 'express';

const app = express();

const user = []

app.post('/usuarios',(request,response) => {
    console.log(request)
})

// na nossa rota: Tipo e o endereço
app.get('/usuarios',(request,response) => {
    app.send('Teste de comunicacao');
})

app.listen(3000);

// Criando nossa API de usuarios - Mais info no Doc.txt