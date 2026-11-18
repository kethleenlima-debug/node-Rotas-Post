import express from 'express';
// app representa o servidor
const app = express();

app.get('/busca', (req, res)=>{
    console.log("Enviado!")
    res.send("Resposta Retornada!");
})

// ligar servidor e definir uma porta
app.listen(3000, ()=> {console.log("Servidor rodando!")})
