import express from 'express';

const app = express();

const users = [];

app.post('/usuarios', (req, res) => {
    res.send('Usuário cadastrado!');
});

app.get('/usuarios', (req, res) => {
    res.send('teste comunicação');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
