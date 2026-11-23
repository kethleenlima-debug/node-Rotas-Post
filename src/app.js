import express from "express";
const app = express();
//atia leitor json
app.use(express.json())

//rota saida de dados

app.get('/usuario',(req, res)=>{
    const nomeBusca = req.query.nome;
    if(nomeBusca){
        const nomes = usuario.filter( (i)=>{
            return i.nome.toLowerCase().includes(nomeBusca.toLowerCase());
        })
        return res.status(200).json(nomes);
    }

    res.status(200).json(usuario);
})

app.delete('/usuarios/:id', (req, res) => {
    // pega o id do parâmetro
    const idDelete = parseInt(req.params.id);
    console.log(idDelete);

    const index = usuario.findIndex((i) => {
        return i.id == idDelete;
    });

    // O console.log precisa vir AQUI, depois que o findIndex terminou
    console.log("index: " + index);

    if (index === -1) {
        return res.status(404).json({ msg: "id não encontrado!" });
    } else {
        usuario.splice(index, 1);
        return res.status(200).json({ msg: "Usuário excluído com sucesso!" });
    }
});

//busca por id (Route Param)
app.get('/usuarios/:id', (req, res) => {
    const idBusca = req.params.id;

    // busca por id
    const idBuscado = usuario.find((i) => {
        return i.id === idBusca;
    }); // Note que fechamos a função com } e depois o parêntese do find com ), e adicionamos o ;

    // se não encontrar
    if (!idBuscado) {
        return res.status(404).json({ msg: "Usuario não encontrado" });
    }

    // resposta se encontrar
    return res.status(200).json(idBuscado);
});

// CRUD create read update delete
//update
app.put('/usuarios/:id',(req,res)=>{
    const idUpdate = parseInt(req.params.id);
    // {} extrai uma propriedade dentro do objeto
    const {nome} = req.body;
    // verifica se usuário do id enviado existe
    const usuarioExiste = usuario.find((i)=>{
        return i.id == idUpdate ;
    })

    if(!usuarioExiste){
        return res.status(404).json({msg:"Usuário não encontrado!"});
    }

    if(nome) {
        usuarioExistente.nome = "Julia Silva";
        return res.status(200).json({msg:"Usuário Atualizado!"})
    }

})


app.post('/usuario',(req, res)=> {
    console.log(req.body);
    usuario.push(req.body);
    res.status(201).json({mensagem:"Cliente cadastrado!"})
})
app.listen(3000, ()=>{
    console.log("Servidor Rodando!")
})

