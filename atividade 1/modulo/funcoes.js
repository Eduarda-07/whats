/*  objetivo: desenvolver uma função e uma API para cada requisição do projeto Whats
    data: 28/01/25
    versão: 1
    autora: Eduarda Silva
*/


var moduloContatos = require ('./contatos')
// console.log(moduloContatos)

const getDadosPessoais = function(numeroTelefone){
    let telefone = Number(numeroTelefone)
    let dadosEcontrados = {}
    let status = false

    moduloContatos.contatos.whatsUsers.forEach(function(item){
        if(Number(item.number) == telefone){
            status = true
            dadosEcontrados.id = item.id
            dadosEcontrados.criado_em = item.created_since
            dadosEcontrados.conta = item.account
            dadosEcontrados.numero = item.number
        }
    })
    if(status == true){
        return dadosEcontrados
    }else{
        return status
    }
}
// console.log(getDadosPessoais('11987876567'))

const getDadosPerfil = function(numeroTelefone){
    let telefone = Number(numeroTelefone)
    let dadosEcontrados2 = {}
    let status = false

    moduloContatos.contatos.whatsUsers.forEach(function(item){
        if(Number(item.number) == telefone){
            status = true
            dadosEcontrados2.apelido = item.nickname
            dadosEcontrados2.foto_perfil = item['profile-image']
            dadosEcontrados2.cor_fundo = item.background
        }
    })

    if(status == true){
        return dadosEcontrados2
    }else{
        return status
    }
}
// console.log(getDadosPerfil('11987876567'))

const getDadosContatos = function(numeroTelefone){
    let telefone = Number(numeroTelefone)
    let dadosEcontrados3 = {}
    let listaContatos = []
    let status = false

    moduloContatos.contatos.whatsUsers.forEach(function(item){
        if(Number(item.number) == telefone){
            status = true
    //    console.log(item)

        dadosEcontrados3.apelido = item.nickname

            item.contacts.forEach(function(item2){
            listaContatos.push ({
                nome: item2.name,
                foto: item2.image,
                descricao: item2.description
            })
            
        })
        dadosEcontrados3.contatos = listaContatos

    }
})
    if(status == true){
        return dadosEcontrados3
    }else{
        return status
    }
}
// console.log(getDadosContatos('11987876567'))

const getMensagem = function(numeroTelefone){
    let telefone = Number(numeroTelefone)
    let status = false
    let dadosEcontrados4 = {}
    let listaContatos2 = []
    let listaMensagens = []

    moduloContatos.contatos.whatsUsers.forEach(function(item){
        if(Number(item.number) == telefone){
            status = true

            dadosEcontrados4.apelido = item.nickname

            item.contacts.forEach(function(item2){
                // listaContatos2.push ({
                //     nome: item2.name,
                //     foto: item2.image,
                //     descricao: item2.description,
                //     mensagens: listaMensagens
                //  })
             item2.messages.forEach(function(item3){
                //  listaContatos2.push({
                //     conversas: {
                //         sender: item3.sender,
                //         content: item3.content,
                //         time: item3.time
                //     }
                    
                //  })
                listaMensagens.push({
                    sender: item3.sender,
                    content: item3.content,
                    time: item3.time
                })
             })

             listaContatos2.push({
                nome: item2.name,
                foto: item2.image,
                descricao: item2.description,
                conversas: listaMensagens})
            })
            dadosEcontrados4.contatos = listaContatos2
        }

    })

    if(status == true){
        return dadosEcontrados4
    }else{
        return status
    }
}
// console.log(getMensagem('11987876567'))

const getUsuarioContato = function(numeroTelefone, nomeContato){
    let telefone = Number(numeroTelefone)
    let contato = String(nomeContato).toUpperCase()
    let status = false
    let dadosEcontrados5 = {}
    let listaMensagens = []

    moduloContatos.contatos.whatsUsers.forEach(function(item){
        if(Number(telefone) == item.number){
           
            item.contacts.forEach(function(item2){
                if(String(contato) == (item2.name).toUpperCase()){
                    status = true
                    item2.messages.forEach(function(item3){
                        listaMensagens.push({
                            sender: item3.sender,
                            content: item3.content,
                            time: item3.time
                        })
                
                    })
                    dadosEcontrados5.apelido = item.nickname
                    dadosEcontrados5.contato = item2.name
                    dadosEcontrados5.conversas = listaMensagens
                
                }
                
            })
        }
    })
    if(status == true){
        return dadosEcontrados5
    }else{
        return status
    }

}

const getPalavrasChave = function(numeroTelefone, nomeContato, palavraChave){
    let telefone = Number(numeroTelefone)
    let contato = String(nomeContato).toUpperCase()
    let palavra = String(palavraChave).toUpperCase()
    let status = false
    let dadosEcontrados6 = {}
    let listaMensagens = []

    moduloContatos.contatos.whatsUsers.forEach(function(item){
        if(Number(telefone) == item.number){
            item.contacts.forEach(function(item2){
                if(String(contato).toUpperCase == (item2.name).toUpperCase()){
                    item2.messages.forEach(function(item3){
                        if(String(palavra).toUpperCase == (item3).toUpperCase().includes(palavra)){
                            status = true
                            listaMensagens.push({
                                sender: item3.sender,
                                content: item3.content,
                                time: item3.time
                            })
                        }
                        dadosEcontrados6.apelido = item.nickname
                        dadosEcontrados6.contato = item2.name
                        dadosEcontrados6.conversas = listaMensagens
                    })
                }
            })
        }
    })

    if(status == true){
        return dadosEcontrados6
    }else{
        return status
    }
}
// console.log(getUsuarioContato('11987876567','Jane Smith'))