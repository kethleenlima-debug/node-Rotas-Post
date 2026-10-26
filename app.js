import express from "express";

const app = express();

app.use(express.json())

let usuario = [];

app.get('/usuarios', (req, res)=>{
    const nomeBusca = req.query.nome

    if(nomeBusca){
        const nome = usuario.filter((i)=> {
            return i.nome.toLowerCase().includes(nomeBusca.toLowerCase());
        })
        return res.status(200).json(nome);
    }
     res.status(200).json(usuario);
})



app.post('/usuarios', (req, res)=> {
console.log(req.body);
usuario.push(req.body);
res.status(201).json({mensagem: "Cliente Cadastrado!"})
})
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Servidor Rodando!")
})