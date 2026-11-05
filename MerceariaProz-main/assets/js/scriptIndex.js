console.log("JavaScript carregado!")

// Pegar produtos do localStorage

const produtosLocalStorage = JSON.parse(
    localStorage.getItem("Produtos")
) || []

console.log("Produtos encontrados:", produtosLocalStorage)

// Encontrar elemento HTML

const listaProdutos = document.getElementById("lista-produtos")

console.log("Elemento encontrado:", listaProdutos)

// Mostrar produtos

listaProdutos.innerHTML = produtosLocalStorage.map((produto) => `

    <article>

        <h3>${produto.nome}</h3>

        <p>Preço: R$ ${produto.preco}</p>

        <p>Categoria: ${produto.categoria}</p>

    </article>

`).join("")