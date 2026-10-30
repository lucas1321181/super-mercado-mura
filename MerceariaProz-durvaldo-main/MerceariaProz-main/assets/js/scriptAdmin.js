
// Create
const formcadastro = document.getElementById("FormCadastro")

formcadastro.onsubmit = (event) => {
    event.preventDefault()

    // 1 - Pegar os valores digitados na tela

    const nomeProdutoDigitado = document.getElementById("nome").value
    const precoProdutoDigitado = Number(document.getElementById("preco").value)
    const categoriaProdutoDigitado = document.getElementById("categoria").value

    // 2 - Criar um objeto com esses valores

    const Produto = {
        nome: nomeProdutoDigitado,
        preco: precoProdutoDigitado,
        categoria: categoriaProdutoDigitado
    }

    // 3 - Pegar os valores do localStorage

    let produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))

    if (!produtosLocalStorage) {
        produtosLocalStorage = []
    }

    // 4 - Adicionar o produto ao array

    produtosLocalStorage.push(Produto)

    // 5 - Salvar no localStorage

    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))

    location.reload()
}

// Recuperar produtos salvos
const produtoslocalStorage = JSON.parse(localStorage.getItem("Produtos")) || []

const listaProdutos = document.getElementById("items")

listaProdutos.innerHTML =
    produtoslocalStorage.map((produto, index) => `
        <li>
            ${index} - ${produto.nome}
            <button onclick="excluirProduto(${index})">x</button>
        </li>
    `).join("")

// Excluir produto
function excluirProduto(index) {
    console.log(`Vamos excluir esse produto ${index}`)

    produtoslocalStorage.splice(index, 1)

    localStorage.setItem("Produtos", JSON.stringify(produtoslocalStorage))

    location.reload()
}
