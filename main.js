function ColetarCep() {
    let cep = document.querySelector("#cep").value
    console.log(cep)
    Dados(cep)
    
}


async function Dados(cep) {
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
    console.log(dados)
    dadosTela(dados)  
}

//permuta dos dados na tela

function dadosTela(dados) {
    document.querySelector("#endereco").innerHTML = dados.logradouro 
    document.querySelector("#Bairro").innerHTML = dados.bairro 
    document.querySelector("#Cidade").innerHTML = dados.localidade 
    document.querySelector("#Estado").innerHTML = dados.uf
    document.querySelector("#Regiao").innerHTML = dados.regiao 

}
