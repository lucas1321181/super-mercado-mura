// CREATE E EDIT
const formCadastro = document.getElementById("formCadastro")

// null significa que nenhum produto está sendo editado
let isEditando = null

formCadastro.onsubmit = (event) => {
    event.preventDefault()

    const nomeProdutoDigitado = document.getElementById("nome").value
    const precoProdutoDigitado = Number(document.getElementById("preco").value)
    const categoriaProdutoDigitado = document.getElementById("categoria").value

    const produto = {
        nome: nomeProdutoDigitado,
        preco: precoProdutoDigitado,
        categoria: categoriaProdutoDigitado
    }

    let produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos")) || []

    if (isEditando !== null) {
        produtosLocalStorage[isEditando] = produto
    } else {
        produtosLocalStorage.push(produto)
    }

    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))

    location.reload()
}


// READ — MOSTRAR OS PRODUTOS NA TABELA

const produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos")) || []

const listaProdutos = document.getElementById("itens")

listaProdutos.innerHTML = produtosLocalStorage.map((produto, index) => `
    <tr>
        <td>${index + 1}</td>

        <td>${produto.nome}</td>

        <td>
            <div class="acoes">
                <button
                    class="botao-editar"
                    onclick="editarProduto(${index})"
                >
                    Editar
                </button>

                <button
                    class="botao-excluir"
                    onclick="excluirProduto(${index})"
                >
                    Excluir
                </button>
            </div>
        </td>
    </tr>
`).join("")


// DELETE — EXCLUIR PRODUTO

function excluirProduto(index) {
    const confirmar = confirm("Deseja realmente excluir este produto?")

    if (!confirmar) {
        return
    }

    produtosLocalStorage.splice(index, 1)

    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))

    location.reload()
}


// UPDATE — EDITAR PRODUTO

function editarProduto(index) {
    const produto = produtosLocalStorage[index]

    document.getElementById("nome").value = produto.nome
    document.getElementById("preco").value = produto.preco
    document.getElementById("categoria").value = produto.categoria

    isEditando = index

    document.querySelector(".botao-cadastrar").textContent = "Salvar alterações"

    // Leva a tela de volta para o formulário
    document.querySelector(".area-cadastro").scrollIntoView({
        behavior: "smooth"
    })
}