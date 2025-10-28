// listagem.js
document.addEventListener("DOMContentLoaded", () => {
    const tabela = document.getElementById("tabelaSessoes");
    const sessoes = JSON.parse(localStorage.getItem("sessoes") || "[]");
    const filmes = JSON.parse(localStorage.getItem("filmes") || "[]");
    const salas = JSON.parse(localStorage.getItem("salas") || "[]");

    sessoes.forEach(sessao => {
        const row = tabela.insertRow();

        const filme = filmes.find(f => f.id == sessao.idFilme);
        const sala = salas.find(s => s.id == sessao.idSala);

        row.insertCell(0).textContent = filme ? filme.titulo : "Não encontrado";
        row.insertCell(1).textContent = sala ? sala.nome : "Não encontrado";
        row.insertCell(2).textContent = sessao.dataHora;
        row.insertCell(3).textContent = "R$ " + parseFloat(sessao.preco).toFixed(2);

        const btnCell = row.insertCell(4);
        const btnComprar = document.createElement("button");
        btnComprar.className = "btn btn-primary btn-sm";
        btnComprar.textContent = "Comprar Ingresso";


        btnComprar.addEventListener("click", () => {
            localStorage.setItem("sessaoSelecionada", sessao.id);
            window.location.href = "venda.html";
        });

        btnCell.appendChild(btnComprar);
    });
});
