//cfg express
const express = require("express")
const server = express()

const ideias = [
    {
        img:"https://image.flaticon.com/icons/svg/2728/2728995.svg",
        title:"Curso de programação",
        category:"Estudo",
        description:"Profissionalize-se, amplie o seu conhecimento, se prepare para trabalhos mais difíceis, mais exigentes, melhor remunerados!",
        url:"http://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title:"Treinar Programação",
        category:"Profissional",
        description:"Pratique suas habilidades de programação, desenvolva métodos melhores, mais eficientes, ou domine aqueles conhecimentos que você aprendeu a pouco tempo.",
        url:"http://rocketseat.com.br"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729021.svg",
        title:"Jogar",
        category:"Entretenimento",
        description:"Vá jogar, distraia sua cabeça. ACABE COM OS INIMIGOS!",
        url:"http://store.steampowered.com/?l=portuguese"
    },
    {
        img:"https://image.flaticon.com/icons/svg/2729/2729054.svg",
        title:"Brincar com o seu Pet",
        category:"Amor",
        description:"Own *-*",
        url:"http://rocketseat.com.br"
    }
]

//cfg arquivos estáticos
server.use(express.static("public"))

//config nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server,
    noCache: true,

})

//capturar pedido
server.get("/",function(req, res){
    let revertIdeias = [...ideias].reverse()
    let lastIdeas = []
    for (let idea of revertIdeias) {
        if(lastIdeas.length <2){
            lastIdeas.push(idea)
        }
    }

    

    return res.render("index.html", {ideias: lastIdeas})
})

server.get("/ideias",function(req, res){
    return res.render("ideias.html", {ideias})
})

//ligar na porta x
server.listen(3000)