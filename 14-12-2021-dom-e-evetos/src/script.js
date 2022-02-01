// Acessar um elemento
const displayDeProdutos = document.getElementById('products-display');

const cardProdutos = document.querySelectorAll('.card')


// Editar um elemento
const cardProdutoAzul = cardProdutos[0]
cardProdutoAzul.innerHTML = "hackeado"


// Criar um elemento

const primeiroParagrafo = document.createElement('p')

primeiroParagrafo.innerHTML = "produto esgotado"

const cardProdutoVermelho = cardProdutos[1]

cardProdutoVermelho.appendChild(primeiroParagrafo)


// Eventos

const form = document.querySelector('form')

form.addEventListener('submit', function(evento){
    evento.preventDefault()
})

function criarCardNovo(){
    const inputNome = document.getElementById('inputNomeDoProduto')
    const inputDescricao = document.getElementById('inputDescricaoDoProduto')
    const inputPreco = document.getElementById('inputPrecoDoProduto')

    const div = document.createElement('div')
    div.classList.add("card")
    div.classList.add("card-product") 

    let nomeDoProdutoTratado = inputNome.value.replace(' ', '')

    console.log(nomeDoProdutoTratado)

    const nomeProduto = document.createElement('h3')
    nomeProduto.innerText = inputNome.value

    console.log(inputPreco)

    const descricaoProduto = document.createElement('p')
    descricaoProduto.innerText = inputDescricao.value

    const precoProduto = document.createElement('p')
    precoProduto.classList.add("preco")
    precoProduto.innerText = inputPreco.value

    const botaoAdicionarNoCarrinho = document.createElement('button')
    botaoAdicionarNoCarrinho.id = `add${nomeDoProdutoTratado}`
    botaoAdicionarNoCarrinho.innerHTML = "Adicionar ao carrinho"

    div.appendChild(nomeProduto)
    div.appendChild(descricaoProduto)
    div.appendChild(precoProduto)
    div.appendChild(botaoAdicionarNoCarrinho)

    displayDeProdutos.appendChild(div)

}

const botaoNovoCard = document.getElementById('inputEnviar')

botaoNovoCard.addEventListener('click', criarCardNovo)


// Objeto evento e Bubbling

const botaoBubbling = document.getElementById('botaoBubbling')
const table = document.querySelector('table')
const tr = document.querySelector('tr')
const th = document.querySelector('th')
const td = document.querySelector('td')

// Utilizando Target
table.addEventListener('click', (e) => {
    const alvo = e.target

    if(alvo === td){
        console.log(alvo)
    } else{
        console.log('errou')
    }

})

// Executando Capturing

// table.addEventListener('click', (e) => console.log('table'), true)
// td.addEventListener('click', (e) => console.log('td'))

