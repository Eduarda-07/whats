/*****************************************************************************
 * objetivo: API para retornar dados dos contados e dos usuários do whatsapp
 * data: 10/02/25
 * versão: 1.0
 * autor: Eduarda de Jesus
 ****************************************************************************/



const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// inicia a utilização do express
 const app = express()


// response - significa a resposta da API
// require - significa a chegada de dados na API
app.use((request, response, next) =>{

    // permissão de onde virão as requisições na API
    response.header('Access-Control-Allow-Origin', '*')

    //permissão de quais métodos do http a API irá responder:
    response.header('Access-Control-Allow-Methods', '')

    app.use(cors())

    next()

})

const contatos = require("./modulo/funcoes")
//endpoint para retornar os dados pessoais 

app.get('/v1/whatsApp/dados-pessoais/:numeroTelefone', cors(), async function(request, response){
    
    let tel = request.params.numeroTelefone

    let dados = contatos.getDadosPessoais(tel)

    // resposta da api com json e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar nenhum dado'})
    }
    
})

app.get('/v1/whatsApp/dados-perfil/:numeroTelefone', cors(), async function(request,response){
    let tel = request.params.numeroTelefone

    let dados = contatos.getDadosPerfil(tel)

    // resposta da api com json e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar nenhum dado'})
    }
})

app.get('/v1/whatsApp/dados-contatos/:numeroTelefone', cors(), async function(request,response){
    let tel = request.params.numeroTelefone

    let dados = contatos.getDadosContatos(tel)

    // resposta da api com json e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar nenhum dado'})
    }
})

app.get('/v1/whatsApp/mensagens/:numeroTelefone', cors(), async function(request,response){
    let tel = request.params.numeroTelefone

    let dados = contatos.getMensagem(tel)

    // resposta da api com json e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar nenhum dado'})
    }
})

app.get('/v1/whatsApp/usuario-contato/', cors(), async function(request,response){
    let tel = request.query.numeroTelefone

    let contato = request.query.contato

    let dados = contatos.getUsuarioContato(tel, contato)

    // resposta da api com json e o status code
    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': 404, 'message': 'Não foi possível encontrar nenhum dado'})
    }
})
//executa a api e faz com que fique aguardando novas requisições
app.listen('8080', function(){
    console.log('API funcionando e aguardadndo requisições')
})