import express from "express";

const app = express();

app.use(express.json())

let usuario = [];

app.get('/usuarios', (req, res)=>{
    const nomeBusca = req.query.nome;

    if(nomeBusca){
        const nome = usuario.filter((i)=> {
            return i.nome.toLowerCase().includes(nomeBusca.toLowerCase());
        })
        return res.status(200).json(nome);
    }
     res.status(200).json(usuario);
})

app.delete('/usuarios/:id',(res,req)=>{
    const idDelete = parseInt(req.params.id);
    console.log(idDelete);
    const index = usuario.findIndex((i)=>{
        return i.id == idDelete;
        console.log("index: " + index);
    })
    if(index == -1){
        return res.status(404).json({msg: "id não encontrado!"})
    }else{
        usuario.splice(index,1);
        return res.status(200).json({msg:"Usuário excluido com suceso!"})
    }
})

//busca por id (Route Paran)
app.get('/usuarios/:id', (req, res)=> {
    const idBusca = parseInt(req.params.id);
    const idBuscado =  usuario.find((i)=> {
        return i.id == idBusca
    })

    if(!idBuscado){

        return res.status(404).json({msg:"Usuario não encontrado"})
    }     
    return res.status(200).json(idBuscado);
})

app.put('/usuarios/:id',(req, res) =>{
    const idUpdade = parseInt(req.params.id);
    const{nome} = req.body;
    const usuarioExiste = usuario.find((i)=>{
        return i.id == idUpdade;
    })
    if(usuarioExiste){
        return res.status(404).json({msg:"Usuário no encontrado!"})
    }
    if(nome){
        usuarioExite.nome = "Julia Silva";
        return res.status(200).json({msg:"Usuario Atualizado"})
    }
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