import express from "express";

const app = express();

app.use(express.json())

let usuario = [];

app.get('/usuarios', (req, res)=>{
    res.json(usuario);
})

app.post('/usuarios', (req, res)=> {
console.log(req.body);
usuario.push(req.body);
res.status(201).json({mensagem: "Cliente Cadastrado!"})
})

app.listen(3000,()=>{
    console.log("Servidor Rodando!")
})
